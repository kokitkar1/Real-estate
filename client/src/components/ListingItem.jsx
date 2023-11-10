import {Link} from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import PropTypes from 'prop-types';

const ListingItem = ({listing}) => {

  ListingItem.propTypes = {
    listing: PropTypes.shape({
      _id: PropTypes.string,
      imageUrls: PropTypes.string,
      name: PropTypes.string,
      address: PropTypes.string,
      description: PropTypes.string,
      bedrooms: PropTypes.string,
      bathrooms: PropTypes.string,
      offer: PropTypes.string,
      discountPrice: PropTypes.string,
      regularPrice: PropTypes.string,
      type: PropTypes.string,
    }),
  };

  return (
    <div className=' bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[270px]'>
        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0] || "https://www.feeta.pk/blog/wp-content/uploads/2021/05/Hire-an-Experienced-Seller-Real-Estate-Professional.jpg"} alt="Listing Cover" className='h-[220px] sm:h-[200px] w-full object-cover hover:scale-105 transition-scale duration-300' />
            <div className='p-3 flex flex-col gap-2 w-full'>
                <p className=' truncate text-lg font-semibold text-slate-700' >{listing.name}</p>
                <div className="flex items-center gap-2">
                    <MdLocationOn className=' h-4 w-4 text-green-700'/>
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
        </Link>
    </div>
  )
}

export default ListingItem
