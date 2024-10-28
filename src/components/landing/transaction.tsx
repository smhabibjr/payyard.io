"use client"
import { CheckIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import AnimScroll from './animScroll';

type TransactionItem = {
  id: number;
  title: string;
  description: string;
};

function Transaction() {
  const data: TransactionItem[] = [
    {
      id: 1,
      title: 'Paid Invoice',
      description: 'With the paid invoice you can check any monthly bills that have been paid by you',
    },
    {
      id: 2,
      title: 'Monthly Progress',
      description: 'The Monthly Progress Feature in the invoice can track your speed in paying bills each month',
    },
    {
      id: 3,
      title: 'Modern UI',
      description: 'With the modern user interface, it makes it easier for you to make payments due to its simplicity',
    },
  ];

  useEffect(() => {
    AnimScroll('.title2', 100, { trigger: '.title2' });
    AnimScroll('#list-0', 50, { trigger: '.play-1'});
    AnimScroll('#list-1', 50, { trigger: '.play-2'});
    AnimScroll('#list-2', 50, { trigger: '.play-3'});
    AnimScroll('.bg', 300, { trigger: '#list-0'});
    AnimScroll('#img-1', 30, { trigger: '#list-0'});
    AnimScroll('#img-2', 30, { trigger: '#list-1'});
    AnimScroll('#img-3', 30, { trigger: '#list-2'});
    AnimScroll('#img-4', 30, { trigger: '#list-0'});
    AnimScroll('#img-5', 30, { trigger: '#list-1'});
    AnimScroll('#img-6', 30, { trigger: '.last'});
  }, []);

  return (
    <div className="w-full xl:w-container px-0 md:px-32 lg:px-12 xl:px-0 mx-auto overflow-hidden text-white flex flex-wrap lg:flex-nowrap justify-center xl:justify-between items-center gap-24 mt-[6rem]">
      <div className="w-full lg:w-11/12">
        <h2 className="title2 text-3xl md:text-4xl text-center lg:text-left font-semibold leading-tight md:leading-relaxed mb-16">
          Monitor Transaction Live Through the Software
        </h2>
        {data.map((content, i) => (
          <div id={`list-${i}`} key={content.id} className="flex items-start gap-5 mt-8 mx-8 lg:mx-0">
            <CheckIcon className="w-8 bg-midBlue text-white rounded-full p-2" />
            <div>
              <p className="text-xl font-medium">{content.title}</p>
              <p className="mt-2 text-base leading-loose text-slate-400 group-hover:text-white">
                {content.description}
              </p>
            </div>
          </div>
        ))}
        <div className="last"></div>
      </div>
      <div className="flex items-center gap-8 mx-10 xl:mx-0 xl:pr-20">
        <div className="flex flex-col items-start gap-7 z-10">
          <img id="img-1" className="w-min" src="/dash1.png" alt="Dashboard 1" />
          <img id="img-2" className="play-1 w-min" src="/dash2.png" alt="Dashboard 2" />
          <img id="img-3" className="play-2 w-min" src="/dash3.png" alt="Dashboard 3" />
        </div>
        <div className="flex flex-col items-start gap-7 z-10">
          <img id="img-4" className="w-min" src="/dash4.png" alt="Dashboard 4" />
          <img id="img-5" className="w-min" src="/dash5.png" alt="Dashboard 5" />
          <img id="img-6" className="play-3 w-min" src="/dash6.png" alt="Dashboard 6" />
        </div>
        <div className="bg hidden lg:block absolute w-[400px] h-[630px] bg-gradient rounded-2xl z-0 ml-44"></div>
      </div>
    </div>
  );
}

export default Transaction;
