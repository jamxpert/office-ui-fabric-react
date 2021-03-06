import { styled } from '../../Utilities';
import { IStackedBarChartProps, IStackedBarChartStyleProps, IStackedBarChartStyles } from './StackedBarChart.types';
import { StackedBarChartBase } from './StackedBarChart.base';
import { getStyles } from './StackedBarChart.styles';

// Create a StackedBarChart variant which uses these default styles and this styled subcomponent.
export const StackedBarChart = styled<IStackedBarChartProps, IStackedBarChartStyleProps, IStackedBarChartStyles>(
  StackedBarChartBase,
  getStyles
);
