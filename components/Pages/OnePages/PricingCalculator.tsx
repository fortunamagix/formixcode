'use client';
import { useState } from 'react';
import Image from 'next/image';

interface WebsiteType {
  name: string;
  price: number;
}

interface HostingOption {
  name: string;
  price: number;
}

interface PricingData {
  websiteTypes: WebsiteType[];
  hostingOptions: HostingOption[];
}

export default function PricingCalculator() {
  const [platform, setPlatform] = useState<'nextjs' | 'wordpress'>('nextjs');
  const [selectedType, setSelectedType] = useState<string>('Professional');
  const [selectedHosting, setSelectedHosting] = useState<string>('No hosting');
  const [include3D, setInclude3D] = useState<boolean>(false);

  const pricingData: Record<'nextjs' | 'wordpress', PricingData> = {
    nextjs: {
      websiteTypes: [
        { name: 'Professional', price: 2000 },
        { name: 'E-commerce', price: 3000 },
        { name: 'Real-estate', price: 2500 },
        { name: 'No need website', price: 0 },
      ],
      hostingOptions: [
        { name: 'Vercel', price: 700 },
        { name: 'Netlify', price: 600 },
        { name: 'AWS', price: 800 },
        { name: 'No hosting', price: 0 },
      ]
    },
    wordpress: {
      websiteTypes: [
        { name: 'Professional', price: 1500 },
        { name: 'E-commerce', price: 2500 },
        { name: 'Real-estate', price: 2000 },
        { name: 'No need website', price: 0 },
      ],
      hostingOptions: [
        { name: 'Bluehost', price: 400 },
        { name: 'HostGator', price: 350 },
        { name: 'AWS', price: 800 },
        { name: 'No hosting', price: 0 },
      ]
    }
  };

  const currentPricing = pricingData[platform];
const calculateTotal = () => {
  const websitePrice = currentPricing.websiteTypes.find(type => type.name === selectedType)?.price || 0;
  const hostingPrice = currentPricing.hostingOptions.find(option => option.name === selectedHosting)?.price || 0;
  const threeDPrice = include3D ? 1000 : 0;
  return websitePrice + hostingPrice + threeDPrice;
};

return (
  <section className="pricing-calculator-area bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="section-title section-white-title wow fadeInUp delay-0-2s">
            <h2>Website Development Services</h2>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="d-flex justify-content-center gap-4">
            <button
              className={`btn ${platform === 'nextjs' ? 'btn-warning' : 'btn-outline-warning'} d-flex align-items-center gap-2`}
              onClick={() => setPlatform('nextjs')}
            >
              <Image src="/images/hero-partner-icons/nextjs.svg" alt="Next.js" width={24} height={24} />
              Next.js
            </button>
            <button
              className={`btn ${platform === 'wordpress' ? 'btn-warning' : 'btn-outline-warning'} d-flex align-items-center gap-2`}
              onClick={() => setPlatform('wordpress')}
            >
              <Image src="/images/hero-partner-icons/wordpress.svg" alt="WordPress" width={24} height={24} />
              WordPress
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="calculator-content wow fadeInUp delay-0-4s">
            <div className="service-selection">
              <div className="mb-4">
                <h3 className="text-white mb-4">Website Type</h3>
                {currentPricing.websiteTypes.map((type: WebsiteType) => (
                  <div key={type.name} className="radio-item">
                      <input
                        type="radio"
                        id={type.name}
                        name="websiteType"
                        checked={selectedType === type.name}
                        onChange={() => setSelectedType(type.name)}
                        className="custom-radio"
                      />
                      <label htmlFor={type.name} className="d-flex justify-content-between align-items-center">
                        <span>{type.name}</span>
                        <span>${type.price.toLocaleString()}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h3 className="text-white mb-4">Hosting/Deployment</h3>
                  {currentPricing.hostingOptions.map((option: HostingOption) => (
                    <div key={option.name} className="radio-item">
                      <input
                        type="radio"
                        id={option.name}
                        name="hostingOption"
                        checked={selectedHosting === option.name}
                        onChange={() => setSelectedHosting(option.name)}
                        className="custom-radio"
                      />
                      <label htmlFor={option.name} className="d-flex justify-content-between align-items-center">
                        <span>{option.name}</span>
                        <span>{option.price === 0 ? 'Free' : `$${option.price}`}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id="3dIntegration"
                      checked={include3D}
                      onChange={(e) => setInclude3D(e.target.checked)}
                      className="custom-checkbox"
                    />
                    <label htmlFor="3dIntegration" className="d-flex justify-content-between align-items-center">
                      <span>Include 3D Integration</span>
                      <span>$1,000</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="total-cost bg-darker p-4 rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-white mb-0">Total Cost</h3>
                  <div className="total-amount">
                    <span className="text-success h2">${calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-muted mb-0">*Hosting prices may vary depending on usage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-calculator-area {
          padding: 100px 0;
          background-color: #0F0F0F !important;
        }
        .calculator-content {
          background-color: #242931;
          padding: 40px;
          border-radius: 10px;
        }
        .radio-item, .checkbox-item {
          margin-bottom: 15px;
        }
        .radio-item label, .checkbox-item label {
          color: #fff;
          padding: 15px 20px;
          background-color: #1a1f25;
          border-radius: 8px;
          margin: 0;
          cursor: pointer;
          width: 100%;
        }
        .custom-radio, .custom-checkbox {
          display: none;
        }
        .custom-radio:checked + label, .custom-checkbox:checked + label {
          background-color: #2c3340;
          border: 1px solid rgb(241, 226, 18);
        }
        .bg-darker {
          background-color: #1a1f25;
        }
        .text-success {
          color: #00ff9d !important;
        }
      `}</style>
    </section>
  );
}