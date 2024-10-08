import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../Utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import StatItem from '../components/StatItem';

export const adminLoader = async() => {
  try {
    const {data} = await customFetch.get('/users/admin/app-stats')
    return data
  } catch (error) {
    console.log(error)
    toast.error("You are not authorized to view this page")
    return redirect("/dashboard")
  }
 
}
const Admin = () => {

  const { jobs,users } = useLoaderData();
  
  return (
    <Wrapper>
      <StatItem 
      title="Current Users"
      count={users}
      color="#e9b949"
      bcg="#fcefc7"
      icon={<FaSuitcaseRolling/>}
      />
      <StatItem 
      title="Total Jobs"
      count={jobs}
      color="#647acb"
      bcg="#e0e8f9"
      icon={<FaCalendarCheck/>}
      />
    </Wrapper>
  )
}

export default Admin