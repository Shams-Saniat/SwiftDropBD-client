import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSendParcel = data => {
        console.log(data);
    }

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>
                {/* parcel type */}
                <div>
                    <label className="label mr-4">
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document
                    </label>
                    <label className="label">
                        <input type="radio" {...register('parcelType')} value="not-document" className="radio" />
                        Not-Document
                    </label>
                </div>

                {/* parcel info: name, weight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (KG)</label>
                        <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight (KG)" />
                    </fieldset>
                </div>

                {/* two colimns */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* sender details */}
                    <div>
                        <fieldset className="fieldset">
                            <h4 className="text-2xl font-semibold">Sender Details</h4>
                            {/* Sender Name */}
                            <label className="label">Sender Name</label>
                            <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

                            {/* Sender Address */}
                            <label className="label mt-4">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

                            {/* Sender District */}
                            <label className="label mt-4">Sender District</label>
                            <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender Address" />

                            {/* Sender Phone No */}
                            <label className="label mt-4">Sender Phone No</label>
                            <input type="number" {...register('senderPhoneNo')} className="input w-full" placeholder="Sender Phone No" />

                            {/* Pickup Instruction */}
                            <label className="label mt-4">Pickup Instruction</label>
                            <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Sender Address" />
                        </fieldset>
                    </div>
                    {/* receiver details */}
                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Receiver Details</h4>
                        {/* Receiver Name */}
                        <label className="label">Receiver Name</label>
                        <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                        {/* Receiver Address */}
                        <label className="label mt-4">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />

                        {/* Receiver District */}
                        <label className="label mt-4">Receiver District</label>
                        <input type="text" {...register('receiverDistrict')} className="input w-full" placeholder="Receiver Address" />

                        {/* Receiver Phone No */}
                        <label className="label mt-4">Receiver Phone No</label>
                        <input type="number" {...register('receiverPhoneNo')} className="input w-full" placeholder="Receiver Phone No" />

                        {/* Delivery Instruction */}
                        <label className="label mt-4">Pickup Instruction</label>
                        <input type="text" {...register('DeliveryInstruction')} className="input w-full" placeholder="Receiver Address" />
                    </fieldset>
                    <div>
                        <input type="submit" className='btn btn-primary text-black' value="Proceed to Confirm Booking" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SendParcel;