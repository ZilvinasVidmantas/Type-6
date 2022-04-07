import React from 'react';
import StatePageControlledComponentsSection from './sections/state-page-controlled-components-section';
import StatePageRelatedVideosSection from './sections/state-page-related-videos-section';
import StatePageStateManagementSection from './sections/state-page-state-management-section';

const StatePage: React.FC = () => (
  <div>
    <StatePageStateManagementSection />

    <StatePageControlledComponentsSection />

    <StatePageRelatedVideosSection />
  </div>
);

export default StatePage;
