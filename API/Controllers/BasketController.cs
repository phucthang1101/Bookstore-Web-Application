using System.Linq;
using System;
using System.Threading.Tasks;
using API.Data;
using API.DTO;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            _context = context;

        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDTO>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            return MapBasketToDTO(basket);
        }

        private BasketDTO MapBasketToDTO(Basket basket)
        {
            return new BasketDTO
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDTO
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity
                }).ToList()
            };
        }

        [HttpPost] // api/basket?productId=3&quantity=2
        public async Task<ActionResult<BasketDTO>> AddItemToBasket(int productId, int quantity)
        {
            // get basket || if basket not exist, then create basket
            var basket = await RetrieveBasket();
            // cuz we use FirstorDefault() then if there is no basket, it will return null
            if (basket == null) basket = CreateBasket();

            //get product
            var product = await _context.Products.FindAsync(productId);
            if (product == null) return NotFound();

            // add item
            // get quantity from query string
            basket.AddItem(product, quantity);

            // save changes
            // SaveChangeAsync method returns integer (number) of changes that have been made in our database
            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetBasket", MapBasketToDTO(basket));

            return BadRequest(new ProblemDetails { Title = "Problem saving item to basket" });
        }



        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            // get basket || if basket not exist, then create basket
            var basket = await RetrieveBasket();
            // cuz we use FirstorDefault() then if there is no basket, it will return null
            if (basket == null)
                return NotFound();


            // remove item or reduce quantity
            basket.DeleteItem(productId, quantity);

            // save changes
            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok();

            return BadRequest(new ProblemDetails { Title = "Problem removing item to basket" });
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                                        .Include(i => i.Items)
                                        .ThenInclude(p => p.Product)
                                        .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);

            var basket = new Basket { BuyerId = buyerId };
            _context.Baskets.Add(basket);

            return basket;
        }
    }
}