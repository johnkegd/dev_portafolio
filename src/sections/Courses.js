import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql  } from "gatsby";
import { Image, Text, Flex, Box } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Hide from '../components/Hide';


const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="primary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '90vw']}
      invertX
      invertY
    />

    <Triangle
      color="secondary"
      height={['35vh', '30vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.secondary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const CourseImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const CourseTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;


const Course = ({
  name,
  shortDescription,
  type,
  dateEnded,
  courseUrl,
  imageC,
}) => (

  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
  
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {shortDescription }
        </Text>
      </TextContainer>
   
      <ImageContainer>
        
        <CourseImage src={imageC.image.src} alt={imageC.title} />
      
        <CourseTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="Check Couse"
                fontAwesomeIcon="globe"
                url={courseUrl}
              />
            </Box>
          </Flex>

          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{dateEnded}</ImageSubtitle>
          </Hide>
        </CourseTag>
      </ImageContainer>

    </Flex>
  </Card>

 
);

Course.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dateEnded: PropTypes.string.isRequired,
  courseUrl: PropTypes.string.isRequired,
  imageC: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Courses = () => (
  <Section.Container id="courses" Background={Background}>
    <Section.Header name="Courses" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
              query CoursesQuery {
                contentfulAbout {
                  coursesJk {
                    id
                    name
                    shortDescription
                    type
                    dateEnded(formatString: "YYYY")
                    courseUrl
                    imageC {
                      title
                      image: resize(width: 200, quality: 100) {
                        src
                      }
                    }
                  }
                }
              }
            `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.coursesJk.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Course {...p} />
            </Fade>
                ))}
        </CardContainer>
          )}
    />   
  </Section.Container>
  
);

export default Courses;
