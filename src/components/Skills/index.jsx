import {skills} from "../../data/constants.jsx";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 20px;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 5.5rem;
    color: ${({ theme }) => theme.text_primary};
    text-transform: uppercase;
    @media (max-width: 768px) {
          margin-top: 5.5rem;
          font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid rgb(1, 106, 112);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;
  &:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
    border: 1px solid #4FD3C4;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover{
    border: 1px solid ${({ theme }) => theme.primary};
    transition: 0.8s all ease;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                   Here are some of my skills on which I have been working on for the past 5 years.
                </Desc>
                <SkillsContainer>
                    {
                        skills.map((item, index) => (
                            <Skill key={item.title}>
                                <SkillTitle>{item.title}</SkillTitle>
                                <SkillList key={index}>
                                    {
                                        item.skills.map((skill, index) => (
                                                <SkillItem key={index}>
                                                    <SkillImage src={skill.image}/>
                                                    {skill.name}
                                                </SkillItem>
                                        ))
                                    }
                                </SkillList>
                            </Skill>
                        ))
                    }
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}
export default Skills