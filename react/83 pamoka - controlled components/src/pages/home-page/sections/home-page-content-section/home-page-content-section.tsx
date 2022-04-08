import React from 'react';
import Container from '../../../../components/container';
import HomePageContentSectionNav from './home-page-content-section-nav';
import Section from '../../../../components/section';
import { HomePageContentSectionContainer } from './styles';

const paragraphText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae sed error ea expedita? Veritatis doloribus dolorem ipsum dignissimos quaerat repellat inventore nobis hic voluptatibus. Perspiciatis minima ducimus fuga, dignissimos dolore, magnam odio corrupti quae eligendi excepturi ipsum dolores labore?';

const subSectionParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa non expedita corporis eaque. Libero quibusdam exercitationem totam est sed quo voluptatum quae dicta. Expedita iusto quaerat aliquid nesciunt eos, quos alias magni quae! Eum, numquam. In minus hic ipsum.';

const HomePageContentSection: React.FC = () => (
  <Section>
    <Container>
      <HomePageContentSectionContainer>
        <div>
          <h2>Content</h2>
          <p>{paragraphText}</p>

          <article>
            <h3>Sub Header</h3>
            <p>{subSectionParagraphText}</p>
          </article>
        </div>
        <HomePageContentSectionNav />
      </HomePageContentSectionContainer>
    </Container>
  </Section>
);

export default HomePageContentSection;
