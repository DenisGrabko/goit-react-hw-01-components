import React from "react";
import {Section, List, Item} from './Statistics.style';

const Statistics = ({ stats }) => {
    return (
  <Section className="statistics">
    {true && <h2 className="title">Upload stats</h2>}

  <List className="stat-list">
    {stats.map(el => {
        return (
       <Item className="item" key={el.id}>
        <span className="label">{el.label}</span>
        <span className="percentage">{el.percentage}%</span>
       </Item>
    );
    })}
    
  </List>
</Section>
);
}

export default Statistics;
