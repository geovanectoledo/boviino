import type { SVGProps } from 'react';
import Link from 'next/link';
import {
  RiGithubFill,
  RiSlackFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from '@remixicon/react';

const SolarLogo = (props: SVGProps<SVGSVGElement>) => (
  //array-start
  <svg
    viewBox="0 0 123 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M65.888 16.936C65.824 16.616 65.7067 16.2747 65.536 15.912C65.3867 15.528 65.152 15.176 64.832 14.856C64.512 14.536 64.096 14.2693 63.584 14.056C63.0933 13.8427 62.4853 13.736 61.76 13.736C61.2267 13.736 60.736 13.8213 60.288 13.992C59.8613 14.1413 59.488 14.3547 59.168 14.632C58.8693 14.888 58.6347 15.1867 58.464 15.528C58.2933 15.8693 58.208 16.232 58.208 16.616C58.208 17.2347 58.4107 17.7787 58.816 18.248C59.2213 18.696 59.84 19.0053 60.672 19.176L63.84 19.784C64.864 19.976 65.7707 20.2853 66.56 20.712C67.3493 21.1387 68.0107 21.6507 68.544 22.248C69.0773 22.824 69.4827 23.4747 69.76 24.2C70.0373 24.9253 70.176 25.6827 70.176 26.472C70.176 27.3467 69.9947 28.2107 69.632 29.064C69.2693 29.896 68.736 30.6427 68.032 31.304C67.3493 31.944 66.496 32.4667 65.472 32.872C64.4693 33.2773 63.3067 33.48 61.984 33.48C60.4693 33.48 59.168 33.2667 58.08 32.84C56.992 32.392 56.0747 31.8267 55.328 31.144C54.6027 30.4613 54.048 29.704 53.664 28.872C53.28 28.0187 53.0453 27.1867 52.96 26.376L57.056 25.288C57.0987 25.8427 57.2267 26.376 57.44 26.888C57.6747 27.4 57.9947 27.8587 58.4 28.264C58.8053 28.648 59.3067 28.9573 59.904 29.192C60.5013 29.4267 61.2053 29.544 62.016 29.544C63.2107 29.544 64.1173 29.288 64.736 28.776C65.376 28.2427 65.696 27.5707 65.696 26.76C65.696 26.0987 65.4613 25.5333 64.992 25.064C64.5227 24.5733 63.84 24.2427 62.944 24.072L59.776 23.432C57.9627 23.0693 56.512 22.3333 55.424 21.224C54.3573 20.0933 53.824 18.664 53.824 16.936C53.824 15.9333 54.0267 15.0053 54.432 14.152C54.8587 13.2773 55.4347 12.52 56.16 11.88C56.8853 11.24 57.728 10.7387 58.688 10.376C59.648 10.0133 60.6613 9.832 61.728 9.832C63.0933 9.832 64.256 10.024 65.216 10.408C66.1973 10.7707 67.008 11.24 67.648 11.816C68.288 12.392 68.7787 13.032 69.12 13.736C69.4827 14.4187 69.728 15.08 69.856 15.72L65.888 16.936ZM79.2515 29.608C79.7635 29.608 80.2648 29.512 80.7555 29.32C81.2462 29.128 81.6728 28.8507 82.0355 28.488C82.3982 28.104 82.6862 27.6347 82.8995 27.08C83.1342 26.5253 83.2515 25.8747 83.2515 25.128C83.2515 24.3813 83.1342 23.7307 82.8995 23.176C82.6862 22.6213 82.3982 22.1627 82.0355 21.8C81.6728 21.416 81.2462 21.128 80.7555 20.936C80.2648 20.744 79.7635 20.648 79.2515 20.648C78.7395 20.648 78.2382 20.744 77.7475 20.936C77.2568 21.128 76.8302 21.416 76.4675 21.8C76.1048 22.1627 75.8062 22.6213 75.5715 23.176C75.3582 23.7307 75.2515 24.3813 75.2515 25.128C75.2515 25.8747 75.3582 26.5253 75.5715 27.08C75.8062 27.6347 76.1048 28.104 76.4675 28.488C76.8302 28.8507 77.2568 29.128 77.7475 29.32C78.2382 29.512 78.7395 29.608 79.2515 29.608ZM79.2515 16.776C80.4248 16.776 81.5128 16.9893 82.5155 17.416C83.5395 17.8213 84.4142 18.3973 85.1395 19.144C85.8862 19.8693 86.4622 20.744 86.8675 21.768C87.2942 22.792 87.5075 23.912 87.5075 25.128C87.5075 26.344 87.2942 27.464 86.8675 28.488C86.4622 29.4907 85.8862 30.3653 85.1395 31.112C84.4142 31.8587 83.5395 32.4453 82.5155 32.872C81.5128 33.2773 80.4248 33.48 79.2515 33.48C78.0782 33.48 76.9795 33.2773 75.9555 32.872C74.9528 32.4453 74.0782 31.8587 73.3315 31.112C72.6062 30.3653 72.0302 29.4907 71.6035 28.488C71.1982 27.464 70.9955 26.344 70.9955 25.128C70.9955 23.912 71.1982 22.792 71.6035 21.768C72.0302 20.744 72.6062 19.8693 73.3315 19.144C74.0782 18.3973 74.9528 17.8213 75.9555 17.416C76.9795 16.9893 78.0782 16.776 79.2515 16.776ZM89.587 33V9.832H93.843V33H89.587ZM96.0657 28.712C96.0657 28.008 96.1831 27.3893 96.4177 26.856C96.6737 26.3013 97.0151 25.8213 97.4418 25.416C97.8684 25.0107 98.3591 24.6907 98.9138 24.456C99.4898 24.2213 100.108 24.0507 100.77 23.944L104.642 23.368C105.09 23.304 105.399 23.176 105.57 22.984C105.74 22.7707 105.826 22.5253 105.826 22.248C105.826 21.6933 105.602 21.2133 105.154 20.808C104.727 20.4027 104.066 20.2 103.17 20.2C102.231 20.2 101.506 20.456 100.994 20.968C100.503 21.48 100.226 22.0773 100.162 22.76L96.3857 21.96C96.4497 21.3413 96.6417 20.7227 96.9618 20.104C97.2818 19.4853 97.7191 18.9307 98.2738 18.44C98.8284 17.9493 99.5111 17.5547 100.322 17.256C101.132 16.936 102.071 16.776 103.138 16.776C104.375 16.776 105.431 16.9467 106.306 17.288C107.18 17.608 107.884 18.0453 108.418 18.6C108.972 19.1333 109.367 19.7627 109.602 20.488C109.858 21.2133 109.986 21.9707 109.986 22.76V30.504C109.986 30.9307 110.007 31.3893 110.05 31.88C110.092 32.3493 110.135 32.7227 110.178 33H106.274C106.231 32.7867 106.188 32.4987 106.146 32.136C106.124 31.752 106.114 31.4107 106.114 31.112C105.708 31.7307 105.122 32.2747 104.354 32.744C103.607 33.2133 102.647 33.448 101.474 33.448C100.642 33.448 99.8844 33.3093 99.2018 33.032C98.5404 32.776 97.9751 32.4347 97.5057 32.008C97.0364 31.56 96.6737 31.0587 96.4177 30.504C96.1831 29.928 96.0657 29.3307 96.0657 28.712ZM102.37 30.28C102.818 30.28 103.244 30.2267 103.65 30.12C104.076 29.992 104.45 29.7893 104.77 29.512C105.09 29.2133 105.346 28.84 105.538 28.392C105.73 27.9227 105.826 27.336 105.826 26.632V25.928L102.274 26.472C101.719 26.5573 101.25 26.76 100.866 27.08C100.503 27.3787 100.322 27.8373 100.322 28.456C100.322 28.9253 100.492 29.352 100.834 29.736C101.175 30.0987 101.687 30.28 102.37 30.28ZM122.596 21.48C122.169 21.3947 121.742 21.352 121.316 21.352C120.761 21.352 120.238 21.4267 119.748 21.576C119.257 21.7253 118.83 21.9707 118.468 22.312C118.105 22.6533 117.806 23.112 117.572 23.688C117.358 24.2427 117.252 24.9467 117.252 25.8V33H112.996V17.256H117.124V19.592C117.358 19.08 117.657 18.664 118.02 18.344C118.404 18.0027 118.798 17.7467 119.204 17.576C119.63 17.4053 120.046 17.288 120.452 17.224C120.878 17.16 121.262 17.128 121.604 17.128C121.774 17.128 121.934 17.1387 122.084 17.16C122.254 17.16 122.425 17.1707 122.596 17.192V21.48Z"
      className="fill-gray-950 dark:fill-gray-50"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.0997 17.8596L31.9992 7.9602L29.8779 5.83883L22.539 13.1777V0H19.539V13.1777L12.2002 5.83883L10.0789 7.9602L19.9784 17.8596L21.039 18.9203L22.0997 17.8596ZM24.2204 19.981L34.1199 10.0815L36.2412 12.2028L28.9024 19.5416H41.998V22.5416H28.9024L36.2412 29.8805L34.1199 32.0018L24.2204 22.1023L23.1597 21.0416L24.2204 19.981ZM7.95821 32.0018L17.8576 22.1023L18.9183 21.0416L17.8576 19.981L7.95821 10.0815L5.83688 12.2028L13.1757 19.5416H0V22.5416H13.1757L5.83688 29.8805L7.95821 32.0018ZM19.9784 24.2236L10.0789 34.1231L12.2002 36.2444L19.539 28.9056V42H22.539V28.9056L29.8779 36.2444L31.9992 34.1231L22.0997 24.2236L21.039 23.1629L19.9784 24.2236Z"
      fill="#3b82f6"
    />
  </svg>
  //array-end
);

const CURRENT_YEAR = new Date().getFullYear();

export default function Example() {
  const sections = {
    solutions: {
      title: 'Solutions',
      items: [
        { label: 'Performance Monitoring', href: '#' },
        { label: 'Resource Management', href: '#' },
        { label: 'Data Analytics', href: '#' },
        { label: 'System Integration', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Database Guide', href: '#' },
        { label: 'Infrastructure', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { label: 'About us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Success Stories', href: '#' },
        { label: 'Security', href: '#' },
      ],
    },
    resources: {
      title: 'Resources',
      items: [
        { label: 'Developer Network', href: '#' },
        {
          label: 'Community',
          href: '#',
          external: true,
        },
        { label: 'Contact', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Report an Issue', href: '#' },
      ],
    },
    partners: {
      title: 'Partners',
      items: [
        { label: 'Cloud Partners', href: '#', external: true },
        { label: 'System Status', href: '#', external: true },
        { label: 'Technology Partners', href: '#', external: true },
        { label: 'Integration Guide', href: '#' },
      ],
    },
  };

  return (
    <div className="obfuscate">
      <div className="xl:px-0 px-4 py-20">
        <footer
          id="footer"
          className="relative mx-auto flex max-w-6xl flex-wrap pt-4"
        >
          {/* Vertical Lines */}
          <div className="pointer-events-none inset-0">
            {/* Left */}
            <div
              className="absolute inset-y-0 my-[-5rem] w-px"
              style={{
                maskImage: 'linear-gradient(transparent, white 5rem)',
              }}
            >
              <svg className="h-full w-full" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  className="stroke-gray-300 dark:stroke-gray-800"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            {/* Right */}
            <div
              className="absolute inset-y-0 right-0 my-[-5rem] w-px"
              style={{
                maskImage: 'linear-gradient(transparent, white 5rem)',
              }}
            >
              <svg className="h-full w-full" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  className="stroke-gray-300 dark:stroke-gray-800"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          </div>
          <svg className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300 dark:border-gray-800 dark:stroke-gray-800">
            <defs>
              <pattern
                id="diagonal-footer-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8;
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      stroke=""
                      strokeWidth="1"
                    />
                  );
                })}
              </pattern>
            </defs>
            <rect
              stroke="none"
              width="100%"
              height="100%"
              fill="url(#diagonal-footer-pattern)"
            />
          </svg>
          <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
            <Link href="/" className="flex select-none items-center">
              <SolarLogo className="ml-2 w-20" />
              <span className="sr-only">Solar Logo (go home)</span>
            </Link>

            <div>
              <div className="mt-4 flex items-center">
                {/* Social Icons */}
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  <RiTwitterXFill className="size-5" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  <RiYoutubeFill className="size-5" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  <RiGithubFill className="size-5" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  <RiSlackFill className="size-5" />
                </Link>
              </div>
              <div className="ml-2 hidden text-sm text-gray-700 dark:text-gray-400 lg:inline">
                &copy; {CURRENT_YEAR} Solar Technologies, Inc.
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
              <h3 className="mb-4 font-medium text-gray-900 dark:text-gray-50 sm:text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.label} className="text-sm">
                    <Link
                      href={item.href}
                      className="text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
}
