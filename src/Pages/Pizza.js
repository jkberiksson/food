import { motion } from 'framer-motion';
import Item from '../Components/Item';
import styled from 'styled-components';

const Pizza = ({ items }) => {
    return (
        <Container>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Container>
    );
};

export default Pizza;

const Container = styled(motion.div)`
    padding: 0 2rem;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
`;
