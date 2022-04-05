import React from 'react';
import Container from '../../components/container';
import ContentSectionNav from './content-section-nav/content-section-nav';
import ContentSectionContainer from './content-section-container';

const style: React.CSSProperties = {
  paddingTop: 60,
  paddingBottom: 60,
};

const paragraphText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae sed error ea expedita? Veritatis doloribus dolorem ipsum dignissimos quaerat repellat inventore nobis hic voluptatibus. Perspiciatis minima ducimus fuga, dignissimos dolore, magnam odio corrupti quae eligendi excepturi ipsum dolores labore?';

const subSectionParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa non expedita corporis eaque. Libero quibusdam exercitationem totam est sed quo voluptatum quae dicta. Expedita iusto quaerat aliquid nesciunt eos, quos alias magni quae! Eum, numquam. In minus hic ipsum.';

const ContentSection: React.FC = () => (
  <div style={style}>
    <Container>
      <ContentSectionContainer>
        <div>
          <h2>Content</h2>
          <p>{paragraphText}</p>

          <article>
            <h3>Sub Header</h3>
            <p>{subSectionParagraphText}</p>
          </article>
        </div>
        <ContentSectionNav />
      </ContentSectionContainer>
    </Container>
  </div>
);

export default ContentSection;
