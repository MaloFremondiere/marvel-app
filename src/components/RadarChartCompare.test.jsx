import React from 'react';
import { render } from '@testing-library/react';
import RadarChartCompare from './RadarChartCompare';

describe('RadarChartCompare', () => {
    const mockData = [
        { name: 'Metric 1', value1: 100, value2: 200 },
        { name: 'Metric 2', value1: 300, value2: 400 },
        { name: 'Metric 3', value1: 500, value2: 600 },
    ];

    it('renders without crashing', () => {
        render(<RadarChartCompare data={mockData} />);
    });

    it('renders the correct number of Radar components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const radarElements = container.querySelectorAll('.recharts-radar');
        expect(radarElements.length).toBe(2);
    });

    it('renders the correct number of PolarAngleAxis components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const angleAxisElements = container.querySelectorAll('.recharts-polar-angle-axis');
        expect(angleAxisElements.length).toBe(1);
    });

    it('renders the correct number of PolarRadiusAxis components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const radiusAxisElements = container.querySelectorAll('.recharts-polar-radius-axis');
        expect(radiusAxisElements.length).toBe(1);
    });

    it('renders the correct number of Tooltip components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const tooltipElements = container.querySelectorAll('.recharts-tooltip-wrapper');
        expect(tooltipElements.length).toBe(1);
    });

    it('renders the correct number of Legend components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const legendElements = container.querySelectorAll('.recharts-default-legend');
        expect(legendElements.length).toBe(1);
    });
});