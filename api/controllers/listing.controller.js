import Listing from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js";
import mongoose from "mongoose";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error)
    }
}


export const deleteListing = async (req,res,next) => {
    const listing = await Listing.findById(req.params.id);
    if(!listing){ return next(errorHandler(404, 'Listing not found!')) }
    if(req.user.id !== listing.userRef){ return next(errorHandler(401, 'Your are Not authorized!')) }
    try {
        await Listing.findByIdAndDelete(req.params.id)
        return res.status(201).json("Listing has been deleted!");
    } catch (error) {
        next(error)
    }
}


export const updateListing = async (req,res,next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return next(errorHandler(400, 'Invalid ObjectId'));
    }
    const listing = await Listing.findById(req.params.id);
    if(!listing){ return next(errorHandler(404, 'Listing not found!')) }
    if(req.user.id !== listing.userRef){ return next(errorHandler(401, 'Your are Not authorized!')) }
    try {
        const updatedListing1 = await Listing.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true}
            );
        res.status(200).json(updatedListing1);
    } catch (error) {
        next(error)
    }
}

export const getListing = async (req,res,next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(errorHandler(400, 'Invalid ObjectId'));
        }
        const listing = await Listing.findById(req.params.id);
        if(!listing){
            return next(errorHandler(404, 'Listing not found!'))
        }
        res.status(200).json(listing)
    } catch (error) {
        next(error)
    }
}