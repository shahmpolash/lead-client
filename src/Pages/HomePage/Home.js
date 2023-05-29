import React from 'react';
import RecentAllLeads from '../../components/Shared/RecentAllLeads';
import HeroBanner from '../HeroBanner/HeroBanner';
import Slider from '../HeroBanner/CompanySlider/Slider';
import ToolsFeature from '../ToolsFeature/ToolsFeature';
import Review from '../Review/Review';
import Integration from '../IntegrationBox/Integration';
import Localization from '../Localization/Localization';
import Awards from '../Awards/Awards';
import BottomBanner from '../BottomBanner/BottomBanner';


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Slider></Slider>
            <RecentAllLeads></RecentAllLeads>
            <ToolsFeature></ToolsFeature>
            <Review></Review>
            <Integration></Integration>
            <Localization></Localization>
            <Awards></Awards>
            <BottomBanner></BottomBanner>
           
        </div>
    );
};

export default Home;