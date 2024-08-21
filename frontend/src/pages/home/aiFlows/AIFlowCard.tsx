import * as React from 'react';
import { Bullseye, CardBody, CardProps, Stack, Content,  } from '@patternfly/react-core';
import TypeBorderedCard from '~/concepts/design/TypeBorderedCard';
import { SectionType } from '~/concepts/design/utils';

type AIFlowCardProps = {
  title: string;
  image: React.ReactNode;
  sectionType: SectionType;
  selected: boolean;
  onSelect: () => void;
} & CardProps;

const AIFlowCard: React.FC<AIFlowCardProps> = ({
  title,
  image,
  sectionType,
  selected,
  onSelect,
  ...rest
}) => (
  <TypeBorderedCard
    sectionType={sectionType}
    selectable
    selected={selected}
    onClick={() => onSelect()}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        onSelect();
      }
    }}
    tabIndex={0}
    {...rest}
  >
    <CardBody>
      <Stack hasGutter>
        <Bullseye>{image}</Bullseye>
        <Bullseye>
          <Content>
            <Content component="p" style={{ textAlign: 'center' }}>
              {title}
            </Content>
          </Content>
        </Bullseye>
      </Stack>
    </CardBody>
  </TypeBorderedCard>
);

export default AIFlowCard;
