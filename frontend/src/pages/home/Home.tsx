import * as React from 'react';
import {
  Bullseye,
  EmptyState,
  Page,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { HomeIcon } from '@patternfly/react-icons';
import { ODH_PRODUCT_NAME } from '~/utilities/const';
import useIsAreaAvailable from '~/concepts/areas/useIsAreaAvailable';
import { SupportedArea } from '~/concepts/areas';
import ProjectsSection from './projects/ProjectsSection';
import { useAIFlows } from './aiFlows/useAIFlows';
import { useResourcesSection } from './resources/useResourcesSection';
import { useEnableTeamSection } from './useEnableTeamSection';
import HomeHint from './HomeHint';

const Home: React.FC = () => {
  const { status: projectsAvailable } = useIsAreaAvailable(SupportedArea.DS_PROJECTS_VIEW);
  const aiFlows = useAIFlows();
  const resourcesSection = useResourcesSection();
  const enableTeamSection = useEnableTeamSection();

  return (
    <Page data-testid="home-page">
      <HomeHint />
      {!projectsAvailable && !aiFlows && !resourcesSection && !enableTeamSection ? (
        <PageSection hasBodyWrapper={false} data-testid="home-page-empty" variant={PageSectionVariants.default}>
          <Bullseye>
            <EmptyState  headingLevel="h4" icon={HomeIcon}  titleText={`Welcome to ${ODH_PRODUCT_NAME}`} variant="full">
              </EmptyState>
          </Bullseye>
        </PageSection>
      ) : (
        <>
          <ProjectsSection />
          {aiFlows}
          {resourcesSection}
          {enableTeamSection}
        </>
      )}
    </Page>
  );
};

export default Home;
