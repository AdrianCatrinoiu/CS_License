import React from "react";

import InfoCard from "../InfoCard";
import Recycle from "../../assets/recycle.svg";
import RenewableEnergy from "../../assets/renewableEnergy.svg";
import Offset from "../../assets/offset.svg";
import Education from "../../assets/educateEmployees.svg";
import SustainableSuppliers from "../../assets/supplier.svg";
import EmployeeTransportation from "../../assets/employeeTransportation.svg";
import RoadTravel from "../../assets/travelEmissions.svg";

const SummarySolutions = () => {
  return (
    <div className="flex flex-col w-[80%] items-center">
      <p className="mb-24 text-[24px]">How to try and reduce your emissions:</p>
      <InfoCard
        title="Choose renewable energy"
        text="With more and more green energy providers on the market, making the switch to renewable energy usage is much easier today than it used to be. Check with your energy provider first if they have any renewable energy plans available. If they don't, then consider switching to a provider that can guarantee that your energy consumption comes from renewable sources."
        position="left"
        image={RenewableEnergy}
      />
      <InfoCard
        title="Apply the three R's: reduce, reuse, recycle"
        text="The principle of the three R's is a must whenever we talk about being environmentally friendly. Consider how you can apply this to every aspect of your business, from office supplies to packaging and operations. What can be reduced, reused, or recycled? Probably a lot more than you think. This will probably not only make your company more eco-friendly but also help its bottom line too! "
        position="right"
        image={Recycle}
      />
      <InfoCard
        title="Pay for carbon offsetting"
        text="No matter how many green choices your company adopts, it will still be generating some amount of CO2 emissions during its activities. Carbon offsets are a great solution to fill in these gaps. There are many options available, from company-wide programs adapted to each specific sector, to those that are specific to a certain activity within your business."
        position="left"
        image={Offset}
      />
      <InfoCard
        title="Reduce road travel emissions"
        text="Depending on your business sector, road travel emissions might seem like an inevitable part of the game. However, if you have a transport fleet, there are different ways you can make it more efficient. Some examples are using fuel-efficient vehicles which produce low emissions, or electric vehicles. "
        position="right"
        image={RoadTravel}
      />
      <InfoCard
        title="Optimize Employees' Transportation"
        text="As we know, transportation is one of the largest sectors of greenhouse gas emissions. By encouraging employees to take public transit, to carpool with other colleagues living closeby or by giving them discounts on public transportation, companies can significantly reduce their indirect CO2 emissions and therefore their impact on climate change."
        position="left"
        image={EmployeeTransportation}
      />

      <InfoCard
        title="Educate employees"
        text="Education is crucial in order to ensure all the analysis and planning carried out to make your organization go greener actually goes through successfully. Your company's employees are the key to succeed in this challenge, but they need to be informed. It's also important to keep in mind that education is an ongoing process and, therefore, it's necessary to regularly inform and educate your employees on this subject."
        position="right"
        image={Education}
      />
      <InfoCard
        title="Choose Sustainable Suppliers"
        text="Each company also has a responsibility regarding the partners it chooses. Choosing a supplier is also an environmentally-friendly choice (or not, depending on the supplier). Therefore, companies should make the effort to choose suppliers who demonstrate they have good environmental practices."
        position="left"
        image={SustainableSuppliers}
      />
    </div>
  );
};

export default SummarySolutions;
