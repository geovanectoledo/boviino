'use client';

import { Card } from '@/components/Card';
import { Divider } from '@/components/Divider';

const data = [
  //array-start
  {
    name: 'Retention – How many users return each week and month',
    description: 'Tracks user retention over weekly and monthly intervals.',
    href: '#',
    editors: [
      {
        name: 'User A',
        imageUrl:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User B',
        imageUrl:
          'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User C',
        imageUrl:
          'https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
    ],
  },
  {
    name: 'Revenue – By employee and role',
    description:
      'Analyzes revenue generated by employees based on their roles and contributions.',
    href: '#',
    editors: [
      {
        name: 'User A',
        imageUrl:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User B',
        imageUrl:
          'https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User C',
        imageUrl:
          'https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User D',
        imageUrl:
          'https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
    ],
  },
  {
    name: 'Active users – Today',
    description:
      'Provides a snapshot of active users on the platform as of today.',
    href: '#',
    editors: [
      {
        name: 'User A',
        imageUrl:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User B',
        imageUrl:
          'https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
    ],
  },
  {
    name: 'Product Sales – Quarterly Report',
    description:
      'Details the sales performance of products over a quarterly timeframe.',
    href: '#',
    editors: [
      {
        name: 'User A',
        imageUrl:
          'https://images.unsplash.com/photo-1621376225397-c1d357c68291?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User B',
        imageUrl:
          'https://images.unsplash.com/photo-1585580568280-68b4f110cfdf?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User C',
        imageUrl:
          'https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
    ],
  },
  {
    name: 'Customer Feedback – Survey Results',
    description:
      'Analyzes customer feedback survey results to gauge customer satisfaction.',
    href: '#',
    editors: [
      {
        name: 'User A',
        imageUrl:
          'https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
    ],
  },
  {
    name: 'Marketing Campaign – Performance Analysis',
    description:
      'Examines the performance of marketing campaigns to return on investment (ROI).',
    href: '#',
    editors: [
      {
        name: 'User A',
        imageUrl:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User B',
        imageUrl:
          'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
      {
        name: 'User C',
        imageUrl:
          'https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256',
      },
    ],
  },
  //array-end
];

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-3"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-3)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  );
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Most recent reports
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="flex flex-col justify-between !p-0">
            <div className="p-2">
              <div className="h-28">
                <ContentPlaceholder />
              </div>
              <div className="px-2 pb-2 pt-4">
                <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <div className="flex -space-x-1 overflow-hidden">
                {item.editors.map((editor) => (
                  <img
                    key={editor.name}
                    className="inline-block size-5 rounded-full ring-2 ring-white dark:ring-[#090E1A]"
                    src={editor.imageUrl}
                    alt=""
                  />
                ))}
              </div>
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                View more &#8594;
              </a>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  );
}
