import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle'
import ListingItem from '../components/ListingItem.jsx';
import ListingRowItem from '../components/ListingRowItem.jsx';
import { MdLocationOn } from 'react-icons/md'


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
              <div className="my-3 bg-teal-400 rounded-lg p-3 flex flex-wrap items-center justify-between">
                <h2 className='text-2xl font-semibold text-slate-800'>Recent Places for Rent</h2>
                <Link className='text-sm text-blue-900 hover:underline' to={'/search?type=rent'}>
                  show more ➤
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

        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3 bg-blue-300 rounded-lg p-3">
              <h2 className='text-2xl font-semibold text-slate-800'>Recent Places for Sale</h2>
            </div>
            <div className="flex flex-col gap-4">
              {saleListings.map((listing) => (
                <div key={listing._id} className='border border-cyan-400 rounded-lg flex p-3 gap-4'>
                  <Link to={`/listing/${listing._id}`}>
                    <img src={listing.imageUrls[0]} alt="Listing Cover" className='h-32 w-32 object-cover rounded-lg  sm:h-44 sm:w-44' />
                  </Link>
                  <div className='flex flex-col gap-2 w-full'>
                  <Link to={`/listing/${listing._id}`}>
                    <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
                    </Link>
                    <div className="flex items-center gap-2">
                      <MdLocationOn className=' h-4 w-4 text-green-700'/>
                      <p className='text-sm text-gray-600 w-full line-clamp-1'>{listing.address}</p>
                    </div>
                    <Link to={`/listing/${listing._id}`}>
                    <p className='hidden md:block text-sm text-gray-600 line-clamp-3'>{listing.description}</p>
                    </Link>
                    <p className='text-slate-500 mt-2 font-semibold flex items-center'>₹{listing.offer ? listing.discountPrice.toLocaleString('INR') : listing.regularPrice.toLocaleString('INR')} {listing.type === 'rent' && '/month'}</p>
                    <div className="text-slate-700 flex gap-4">
                      <div className="font-bold text-xs">{listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}</div>
                        <div className="font-bold text-xs">{listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         )
        }
        <Link className='text-sm text-black-900 font-semibold hover:underline text-center bg-amber-400 rounded-full ' to={'/search?type=sale'}>
                  show more
        </Link>
        <hr className=' bg-black h-0.5' />
      </div>

    </div>
  )
}

export default Home





// old code
        {/* {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3 bg-blue-300 rounded-lg p-3 flex flex-wrap items-center justify-between">
              <h2 className='text-2xl font-semibold text-slate-800'>Recent Places for Sale</h2>
              <Link className='text-sm text-blue-900 hover:underline' to={'/search?type=sale'}>
                show more ➤
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {saleListings.map((listing) => (
                <div key={listing._id} className='border rounded-lg flex p-3 justify-between items-center gap-4'>
                  <Link to={`/listing/${listing._id}`}>
                    <img src={listing.imageUrls[0]} alt="Listing Cover" className='h-40 w-40 object-cover rounded-lg' />
                  </Link>
                  <div className='p-3 flex flex-col gap-2 w-full'>
                  <Link to={`/listing/${listing._id}`}>
                <p className=' truncate text-lg font-semibold text-slate-700' >{listing.name}</p>
                </Link>
                <div className="flex items-center gap-2">
                    <p className=' text-sm text-gray-600 truncate w-full'>{listing.address}</p>
                </div>
                <p className=' text-sm text-gray-600 line-clamp-2' >{listing.description} </p>
                <p className=' text-slate-500 mt-2 font-semibold flex items-center' >₹{listing.offer ? listing.discountPrice.toLocaleString('INR') : listing.regularPrice.toLocaleString('INR')} {listing.type === 'rent' && '/month'} </p>
                <div className=" text-slate-700 flex gap-4">
                  <div className=" font-bold text-xs">
                    {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed` }
                  </div>
                  <div className=" font-bold text-xs">
                    {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath` }
                  </div>
                </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        )} */}

{/* {saleListings && saleListings.length > 0 && (
  <div className="">
    <div className="my-3 bg-blue-300 rounded-lg p-3 flex flex-wrap items-center justify-between">
      <h2 className='text-2xl font-semibold text-slate-800'>Recent Places for Sale</h2>
      <Link className='text-sm text-blue-900 hover:underline' to={'/search?type=sale'}>
        show more ➤
      </Link>
    </div>
    <div className="flex flex-col gap-4">
      {saleListings.map((listing) => (
        <div key={listing._id} className='border rounded-lg flex flex-wrap sm:flex-nowrap p-3 gap-4'>
          <Link to={`/listing/${listing._id}`} className="w-full sm:w-1/4">
            <img src={listing.imageUrls[0]} alt="Listing Cover" className='h-40 w-full object-cover rounded-lg' />
          </Link>
          <div className='p-3 flex flex-col gap-2 w-full sm:w-3/4'>
            <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
            <div className="flex items-center gap-2">
              <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
            </div>
            <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>
            <p className='text-slate-500 mt-2 font-semibold flex items-center'>
              ₹{listing.offer ? listing.discountPrice.toLocaleString('INR') : listing.regularPrice.toLocaleString('INR')} {listing.type === 'rent' && '/month'}
            </p>
            <div className="text-slate-700 flex gap-4">
              <div className="font-bold text-xs">
                {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
              </div>
              <div className="font-bold text-xs">
                {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)} */}