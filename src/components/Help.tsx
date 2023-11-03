"use client"
import React, { useEffect, useState, useRef } from "react";

const Help = ({ socket, username, roomId }: any) => {

    return (
        <>
            <div className="basis-1/4">
                <div className="m-4 text-center rounded p-2 shadow-xl border border-2 border-black-300">
                    <div className="bg-primary p-2 rounded shadow">
                        <p className="text-xl text-white mx-4">Help Requests </p>
                    </div>
                    <div className="py-6">
                        <div className="bg-white border border-black-300 shadow rounded-md p-4 mt-4">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-primary h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-4">
                                    <div className="h-2 bg-primary rounded"></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-black-300 shadow rounded-md p-4 mt-4">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-primary h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-4">
                                    <div className="h-2 bg-primary rounded"></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-black-300 shadow rounded-md p-4 mt-4">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-primary h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-4">
                                    <div className="h-2 bg-primary rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Help;