import { useRouter } from 'next/router'
import Layout from './Layout';
import { useAppSelector } from '../../../redux/store';


const PrivateRoute = (props:any) => {
  const router = useRouter()
  const {user} = useAppSelector(state => state.account);

  if (typeof window !== 'undefined' && user === null) router.push('/login')

  if(!user) return <Layout>Loading</Layout> // a loading component that prevents the page from rendering
   
  return props.children
}

export default PrivateRoute;