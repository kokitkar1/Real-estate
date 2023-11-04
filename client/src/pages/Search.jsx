import { useState } from 'react'

const Search = () => {

    const [sidebardata, setSidebardata] = useState({ searchTerm: '', type: 'all',parking: false, furnished: false, offer: false, sort: 'created_at', order: 'desc'})


    const handleChange = (e) => {
        if(e.target.id === 'all' || e.target.id === 'rent' || e.target.id === 'sale'){
            setSidebardata({...sidebardata, type: e.target.id})
        }
        
    }


  return (
    <div className=' flex flex-col md:flex-row'>

       <div className=" p-7 border-b-2 md:border-r-2 md:min-h-screen">
            <form className=' flex flex-col gap-8'>
                <div className="flex items-center gap-2">
                    <label className=' whitespace-nowrap font-semibold'> Search Term:</label>
                    <input type="text" id="searchTerm" placeholder='Search...' className='border rounded-lg p-3 w-full' value={sidebardata.searchTerm} onChange={handleChange} />
                </div>
                <div className=" flex gap-2 flex-wrap items-center">
                    <label className='font-semibold'>Type: </label>
                    <div className=" flex gap-2">
                        <input type="checkbox" className=" w-5" id="all" checked={sidebardata.type === 'all'} onChange={handleChange} />
                        <span>Rent & Sale</span>
                    </div>
                    <div className=" flex gap-2">
                        <input type="checkbox" className=" w-5" id="rent" checked={sidebardata.type === 'rent'} onChange={handleChange} />
                        <span>Rent</span>
                    </div>
                    <div className=" flex gap-2">
                        <input type="checkbox" className=" w-5" id="sale" checked={sidebardata.type === 'sale'} onChange={handleChange} />
                        <span>Sale</span>
                    </div>
                    <div className=" flex gap-2">
                        <input type="checkbox" className=" w-5" id="offer" checked={sidebardata.offer} onChange={handleChange} />
                        <span>Offer</span>
                    </div>
                </div>
                <div className=" flex gap-2 flex-wrap items-center">
                    <label className='font-semibold'>Amenities: </label>
                    <div className=" flex gap-2">
                        <input type="checkbox" className=" w-5" id="parking" checked={sidebardata.parking} onChange={handleChange} />
                        <span>Parking</span>
                    </div>
                    <div className=" flex gap-2">
                        <input type="checkbox" className=" w-5" id="furnished" checked={sidebardata.furnished} onChange={handleChange} />
                        <span>Furnished</span>
                    </div>
                </div>
                <div className=" flex items-center gap-2">
                    <label className='font-semibold'>Sort:</label>
                    <select id="sort_order" className='border rounded-lg p-3' onChange={handleChange} defaultValue={'created_at_desc'}>
                        <option value="regularPrice_desc">Price high to low</option>
                        <option value="regularPrice_asc">Price low to high</option>
                        <option value="createdAt_desc">Latest</option>
                        <option value="createdAt_asc">Oldest</option>
                    </select>
                </div>
                <button className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95' >Search</button>

            </form>
       </div>

       <div className="">
            <h1 className='w-screen border-b-2 text-3xl font-semibold p-3 text-slate-700 mt-5'>Listing Results: </h1>
       </div>

    </div>
  )
}

export default Search