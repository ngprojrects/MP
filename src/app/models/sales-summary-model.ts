import {ComputedSalesMetricsModel} from './computed-sales-metric-model';
import {NumberDataMap} from './number-data-map';

export  class SalesSummaryModel {
  public daily: NumberDataMap[];
  public weekday: NumberDataMap[];
  public hour: NumberDataMap[];
  public metrics: ComputedSalesMetricsModel;
  public currentDate: Date;
  public dayBeforeCurrentDate: Date;
  public totalSalePercentage: number;
  public discountPercentage: number;
  public netSalePercentage: number;
  public topSales: Map<string, number>;
  public topTenItemsPercentage: number;
  public emailTemplateTopBannerImagePath: string;
  public emailTemplateTopBannerIconPath: string;
  public emailTemplateTotalSalesIconPath: string;
  public emailTemplateNetSalesIconPath: string;
  public emailTemplateDiscountsIconPath: string;
  public emailTemplateTopTenPercentageCircleIconPath: string;
  public emailTemplateTopTenPercentageImagePath: string;
  public emailTemplateSalesIncreaseIconPath: string;
  public emailTemplateSalesDecreaseIconPath: string;
  public saleSummaryReturnUrl: string;
}

