"use client";

import { cx } from "@/lib/utils";

import { LineChart } from "@/components/LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Card } from "@/components/Card"


const data = [
  { date: 'Ago 01', 'Média móvel': 44.1, 'Preço da arroba': 79.2 },
  { date: 'Ago 02', 'Média móvel': 49.1, 'Preço da arroba': 89.1 },
  { date: 'Ago 03', 'Média móvel': 61.2, 'Preço da arroba': 91.7 },
  { date: 'Ago 04', 'Média móvel': 49.7, 'Preço da arroba': 74.4 },
  { date: 'Ago 05', 'Média móvel': 71.1, 'Preço da arroba': 95.3 },
  { date: 'Ago 06', 'Média móvel': 75.3, 'Preço da arroba': 99.4 },
  { date: 'Ago 07', 'Média móvel': 74.1, 'Preço da arroba': 101.2 },
  { date: 'Ago 08', 'Média móvel': 78.4, 'Preço da arroba': 102.2 },
  { date: 'Ago 09', 'Média móvel': 81.1, 'Preço da arroba': 103.6 },
  { date: 'Ago 10', 'Média móvel': 82.6, 'Preço da arroba': 104.4 },
  { date: 'Ago 11', 'Média móvel': 89.3, 'Preço da arroba': 106.3 },
  { date: 'Ago 12', 'Média móvel': 79.3, 'Preço da arroba': 109.5 },
  { date: 'Ago 13', 'Média móvel': 78.6, 'Preço da arroba': 110.4 },
  { date: 'Ago 14', 'Média móvel': 73.8, 'Preço da arroba': 113.5 },
  { date: 'Ago 15', 'Média móvel': 69.7, 'Preço da arroba': 114.1 },
  { date: 'Ago 16', 'Média móvel': 62.6, 'Preço da arroba': 121.4 },
  { date: 'Ago 17', 'Média móvel': 59.3, 'Preço da arroba': 120.4 },
  { date: 'Ago 18', 'Média móvel': 57.1, 'Preço da arroba': 110.7 },
  { date: 'Ago 19', 'Média móvel': 55.1, 'Preço da arroba': 118.8 },
  { date: 'Ago 20', 'Média móvel': 54.3, 'Preço da arroba': 123.1 },
  { date: 'Ago 21', 'Média móvel': 53.2, 'Preço da arroba': 110.2 },
  { date: 'Ago 22', 'Média móvel': 49.4, 'Preço da arroba': 101.2 },
  { date: 'Ago 23', 'Média móvel': 48.1, 'Preço da arroba': 99.2 },
  { date: 'Ago 24', 'Média móvel': 27.1, 'Preço da arroba': 105.8 },
  { date: 'Ago 25', 'Média móvel': 21.0, 'Preço da arroba': 109.4 },
  { date: 'Ago 26', 'Média móvel': 21.3, 'Preço da arroba': 110.1 },
  { date: 'Ago 27', 'Média móvel': 21.8, 'Preço da arroba': 119.6 },
  { date: 'Ago 28', 'Média móvel': 29.4, 'Preço da arroba': 121.3 },
  { date: 'Ago 29', 'Média móvel': 32.4, 'Preço da arroba': 129.1 },
  { date: 'Ago 30', 'Média móvel': 37.1, 'Preço da arroba': 134.5 },
  { date: 'Ago 31', 'Média móvel': 41.3, 'Preço da arroba': 144.2 },
  { date: 'Set 01', 'Média móvel': 48.1, 'Preço da arroba': 145.1 },
  { date: 'Set 02', 'Média móvel': 51.3, 'Preço da arroba': 142.5 },
  { date: 'Set 03', 'Média móvel': 52.8, 'Preço da arroba': 140.9 },
  { date: 'Set 04', 'Média móvel': 54.4, 'Preço da arroba': 138.7 },
  { date: 'Set 05', 'Média móvel': 57.1, 'Preço da arroba': 135.2 },
  { date: 'Set 06', 'Média móvel': 67.9, 'Preço da arroba': 136.2 },
  { date: 'Set 07', 'Média móvel': 78.8, 'Preço da arroba': 136.2 },
  { date: 'Set 08', 'Média móvel': 89.2, 'Preço da arroba': 146.2 },
  { date: 'Set 09', 'Média móvel': 99.2, 'Preço da arroba': 145.2 },
  { date: 'Set 10', 'Média móvel': 101.2, 'Preço da arroba': 141.8 },
  { date: 'Set 11', 'Média móvel': 104.2, 'Preço da arroba': 132.2 },
  { date: 'Set 12', 'Média móvel': 109.8, 'Preço da arroba': 129.2 },
  { date: 'Set 13', 'Média móvel': 110.4, 'Preço da arroba': 120.3 },
  { date: 'Set 14', 'Média móvel': 111.3, 'Preço da arroba': 123.4 },
  { date: 'Set 15', 'Média móvel': 114.3, 'Preço da arroba': 137.4 },
  { date: 'Set 16', 'Média móvel': 105.1, 'Preço da arroba': 130.1 },
  { date: 'Set 17', 'Média móvel': 89.3, 'Preço da arroba': 131.8 },
  { date: 'Set 18', 'Média móvel': 102.1, 'Preço da arroba': 149.4 },
  { date: 'Set 19', 'Média móvel': 101.7, 'Preço da arroba': 149.3 },
  { date: 'Set 20', 'Média móvel': 121.3, 'Preço da arroba': 153.2 },
  { date: 'Set 21', 'Média móvel': 132.5, 'Preço da arroba': 157.2 },
  { date: 'Set 22', 'Média móvel': 121.4, 'Preço da arroba': 139.1 },
  { date: 'Set 23', 'Média móvel': 100.1, 'Preço da arroba': 120.2 },
  { date: 'Set 24', 'Média móvel': 89.1, 'Preço da arroba': 119.1 },
  { date: 'Set 25', 'Média móvel': 97.1, 'Preço da arroba': 112.2 },
  { date: 'Set 26', 'Média móvel': 109.4, 'Preço da arroba': 129.1 },
];

const summary = [
  {
    name: '07/02/2025',
    value: 'R$ 324,60',
    changeType: null,
  },
  {
    name: 'Média do mês',
    value: 'R$ 326,11',
    changeType: null,
  },
  {
    name: 'Média do ano',
    value: 'R$ 322,09',
    changeType: null,
  },
  {
    name: 'vs. Último dia',
    value: '-R$ 2,30 (-0,70%)',
    changeType: 'negative',
  },
  {
    name: 'vs. Média do último mês',
    value: '+R$ 1,16 (0,35%)',
    changeType: 'positive',
  },
  {
    name: 'vs. Média do último ano',
    value: '+R$ 73,04 (29,01%)',
    changeType: 'positive',
  },
];

const tabs = [
  {
    dataRange: data.slice(28, 70),
    name: '30 dias',
  },
  {
    dataRange: data.slice(10, 70),
    name: '60 dias',
  },
  {
    dataRange: data.slice(10, 70),
    name: '6 meses',
  },
  {
    dataRange: data.slice(10, 70),
    name: '12 meses',
  },
  {
    dataRange: data.slice(10, 70),
    name: '2 anos',
  },
  {
    dataRange: data,
    name: 'Desde o início',
  },
];

const valueFormatter = (number: number) =>
  `R$ ${Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number)}`;

export default function Market() {
  return (
    <>
      <h1 className="text-xl py-1 mb-4 font-semibold text-gray-900 dark:text-gray-50">
        Preço do boi gordo
      </h1>
      <Card>
        <div>
          <h3 className="text-sm text-gray-500 dark:text-gray-500">
            07/02/2025
          </h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            R$ 324,60
          </p>
          <p className="mt-1 text-sm font-medium">
            <span className="text-red-700 dark:text-red-500">
              -R$ 2,30 (-0,70%)
            </span>{' '}
            <span className="font-normal text-gray-500 dark:text-gray-500">
              Último dia
            </span>
          </p>
        </div>

        <Tabs defaultValue={tabs[0].name}>
          <div className="mt-6 overflow-x-auto scrollbar-hide">
          <TabsList variant="solid" className="">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          </div>
          <div className="mt-6">
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <LineChart
                  data={tab.dataRange}
                  index="date"
                  categories={['Preço da arroba', 'Média móvel']}
                  colors={['green', 'teal']}
                  valueFormatter={valueFormatter}
                  yAxisWidth={80}
                  tickGap={10}
                  showLegend={false}
                  className="hidden h-72 sm:block"
                />
                <LineChart
                  data={tab.dataRange}
                  index="date"
                  categories={['Preço da arroba', 'Média móvel']}
                  colors={['green', 'teal']}
                  valueFormatter={valueFormatter}
                  showYAxis={false}
                  showLegend={false}
                  startEndOnly={true}
                  className="h-72 sm:hidden"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Resumo
          </h4>
          <div className="mt-4 sm:flex sm:items-center sm:gap-8">
            <ul
              role="list"
              className="w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
            >
              {summary.slice(0, 3).map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span>{item.name}</span>
                  <span className="font-medium text-gray-900 dark:text-gray-50">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="mt-4 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500 sm:mt-0"
            >
              {summary.slice(3, 6).map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span>{item.name}</span>
                  <span
                    className={cx(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                      'font-medium',
                    )}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      <p className="mt-6 text-xs font-base text-gray-500 dark:text-gray-500">
        Fonte: CEPEA
      </p> 
      </Card>
    </>
  );
}