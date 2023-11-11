import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle'
import ListingItem from '../components/ListingItem.jsx';

const Home = () => {
  const [offerListings, setOfferListings] = useState([])
  const [saleListings, setSaleListings] = useState([])
  const [rentListings, setRentListings] = useState([])
  SwiperCore.use([Navigation])

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
      <div className="flex flex-col gap-6 p-5 px-3 max-w-6xl mx-auto">
        <h1 className=' text-slate-700 font-bold text-2xl lg:text-4xl'>Find your next <span className=' text-slate-500'>perfect</span><br />place with ease</h1>
        <div className=" text-gray-500 text-xs sm:text-sm">
          Equity Eagle will help you find your home fast, easy and comfortable.<br/>we have wide range of properties for you to choose from.
        </div>
        <Link to={'/search'} className=' text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
            Lets get started... 
        </Link>
      </div>





      {/* Swiper of the website */}
      {/* <Swiper navigation>
      {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
        <SwiperSlide key={listing._id}> */}
          {/* <div style={{background: `url(${listing.imageUrls[0]}) no-repeat`, backgroundSize:'cover'}} className=' h-[500px]' key={listing._id}></div> */}
          {/* <div style={{ background: `url(${listing.imageUrls[0]}) no-repeat`, backgroundSize: 'cover' }} className=' h-4 sm:h-500 mx-3 rounded-full'></div>
        </SwiperSlide>
        ))}
      </Swiper> */}
      
      {/* <div className='flex flex-wrap gap-6 items-center justify-center mx-auto'>
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
        <img src={offerListings.map((list) => list.imageUrls[0])} alt="listing image" className="w-50 h-40 object-contain rounded-lg" />
      </div> */}






      {/* Bottom of the website, Listing results for offer, sale, rent */}
      <div className=" max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {
          offerListings && offerListings.length > 0 && (
            <div className="">
              <div className="my-3 bg-slate-400 rounded-lg p-3 flex flex-wrap items-center justify-between">
                <h2 className='text-2xl font-semibold text-slate-700'>Recent Offers</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
                  show more ➤
                </Link>
              </div>
              <div className=" flex flex-wrap gap-4">
                {
                  offerListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }

        {/* <hr className=' bg-black h-0.5'/> */}

        {
          rentListings && rentListings.length > 0 && (
            <div className="">
              <div className="my-3 bg-slate-400 rounded-lg p-3 flex flex-wrap items-center justify-between">
                <h2 className='text-2xl font-semibold text-slate-700'>Recent Places for Rent</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                  show more ⮞
                </Link>
              </div>
              <div className=" flex flex-wrap gap-4">
                {
                  rentListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }

        {/* <hr className=' bg-black h-0.5' /> */}

        {
          saleListings && saleListings.length > 0 && (
            <div className="">
              <div className="my-3 bg-slate-400 rounded-lg p-3 flex flex-wrap items-center justify-between">
                <h2 className='text-2xl font-semibold text-slate-700'>Recent Places for Sale</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
                  show more ⮞
                </Link>
              </div>
              <div className=" flex flex-wrap gap-4">
                {
                  saleListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
        <hr className=' bg-black h-0.5' />
      </div>

    </div>
  )
}

export default Home