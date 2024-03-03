import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%; 
    max-width: 800px; 
    margin: auto; 
`;

const ListItem = styled.li`
  background: #d3ddf0;
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    span {
        font-weight: bold;
        margin-right: 10px; 
        min-width: 150px; 
    }
`;

const StyledLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function List({ items }) {
    console.log(items);
    return (
        <StyledList>
            {items.map((item) => (
                item.value !== null && (
                    <ListItem key={item.field}>
                        <span>{item.field}: </span>
                        {typeof item.value === 'string' && item.value.startsWith('http') ? (
                            <StyledLink href={item.value} target="_blank" rel="noopener noreferrer">
                                {item.value}
                            </StyledLink>
                        ) : (
                            item.value
                        )}
                    </ListItem>
                )
            ))}
        </StyledList>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.element,
            ]).isRequired,
        })
    ).isRequired,
};

export default List;