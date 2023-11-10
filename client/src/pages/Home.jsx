import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle'
import { list } from 'firebase/storage';

const Home = () => {
  const [offerListings, setOfferListings] = useState([])
  const [saleListings, setSaleListings] = useState([])
  const [rentListings, setRentListings] = useState([])
  SwiperCore.use([Navigation])
  console.log(saleListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch ('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data)
        fetchRentListings()
      } catch (error) {
        console.log(error);
      }
    }
    const fetchRentListings = async () => {
      try {
        const res = await fetch ('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data)
        fetchSaleListings()
      } catch (error) {
        console.log(error);
      }
    }
    const fetchSaleListings = async () => {
      try {
        const res = await fetch ('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchOfferListings()
  }, [])
  



  return (
    <div>
      {/* TOP of the website */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className=' text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next <span className=' text-slate-500'>perfect</span><br />place with ease</h1>
        <div className=" text-gray-500 text-xs sm:text-sm">
          Equity Eagle will help you find your home fast, easy and comfortable.<br/>we have wide range of properties for you to choose from.
        </div>
        <Link to={'/search'} className=' text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
            Lets get started... 
        </Link>
      </div>

      {/* Swiper of the website */}
      <Swiper navigation>

      {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
        <SwiperSlide>
          <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize:'cover'}} className=' h-[950px]' key={listing._id}>

          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      
      {/* <div className='flex flex-wrap gap-6 items-center justify-center mx-auto'>
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
      </div> */}

      {/* Bottom of the website, Listing results for offer, sale, rent */}
    </div>
  )
}

export default Home