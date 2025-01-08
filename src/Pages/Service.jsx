import React, { useEffect, useState } from "react";
import BarangayClearance from "../Request-Certificate/BaragayClearance.jsx";
import BusinessClearance from "../Request-Certificate/BusinessClearance.jsx";
import CertificateForSoloParent from "../Request-Certificate/CertificateForSoloParent.jsx";
import CertificateOfIndigency from "../Request-Certificate/CertificateOfIndigency.jsx";
import CertificateOfResidency from "../Request-Certificate/CertificateOfResidency.jsx";
import CommonLaw from "../Request-Certificate/CommonLaw.jsx";
import Guardianship from "../Request-Certificate/Guardianship.jsx";
import JobSeeker from "../Request-Certificate/JobSeeker.jsx";
import TravelPermit from "../Request-Certificate/TravelPermit.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Service = () => {
    const [barangayLogo, setBarangayLogo] = useState("");
    const [activeTab, setActiveTab] = useState("BarangayClearance");

    useEffect(() => {
        const fetchBarangayInfo = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/barangay-info`);
                if (response.ok) {
                    const data = await response.json();
                    setBarangayLogo(data.logoUrl || "");
                } else {
                    console.error("Failed to fetch Barangay Logo");
                }
            } catch (error) {
                console.error("Error fetching barangay info:", error);
            }
        };

        fetchBarangayInfo();
    }, []);

    // Tab content mapping
    const renderForm = () => {
        switch (activeTab) {
            case "BarangayClearance":
                return <BarangayClearance />;
            case "BusinessClearance":
                return <BusinessClearance />;
            case "CertificateForSoloParent":
                return <CertificateForSoloParent />;
            case "CertificateOfIndigency":
                return <CertificateOfIndigency />;
            case "CertificateOfResidency":
                return <CertificateOfResidency />;
            case "CommonLaw":
                return <CommonLaw />;
            case "Guardianship":
                return <Guardianship />;
            case "JobSeeker":
                return <JobSeeker />;
            case "TravelPermit":
                return <TravelPermit />;
            default:
                return <BarangayClearance />;
        }
    };

    return (
        <section className="w-full flex flex-col justify-center bg-slate-50">
            <div className="max-w-screen-2xl mx-auto mt-8">
                <div className="text-center">
                    <p className="mt-16 text-xl text-green-700">Services</p>
                    <p className="py-5 mb-10 px-10 md:px-32 text-4xl font-bold text-green-700">
                        We now offer online certificates. <br /> You can now easily request
                        a certificate online, making the process faster and more convenient.
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {[
                        { id: "BarangayClearance", label: "Barangay Clearance" },
                        { id: "BusinessClearance", label: "Business Clearance" },
                        { id: "CertificateForSoloParent", label: "Solo Parent" },
                        { id: "CertificateOfIndigency", label: "Indigency" },
                        { id: "CertificateOfResidency", label: "Residency" },
                        { id: "CommonLaw", label: "Common Law" },
                        { id: "Guardianship", label: "Guardianship" },
                        { id: "JobSeeker", label: "Job Seeker" },
                        { id: "TravelPermit", label: "Travel Permit" },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${activeTab === tab.id
                                ? "bg-green-700 text-white"
                                : "bg-white text-green-700 border border-green-700"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Render Active Tab Content */}
                <div className="bg-white p-6 rounded-md shadow-md">
                    {renderForm()}
                </div>
            </div>
        </section>
    );
};

export default Service;
