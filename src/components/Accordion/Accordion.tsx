import { useState } from 'react'
import Header from '../Common/Header';
import { questions } from './data.ts';

export const Accordion = () => {

  const [isMultipleActive, setMultipleActive] = useState(false);
  const [activeIds, setActiveIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    if (isMultipleActive) {
      setActiveIds(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setActiveIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <>
      <Header title="Accordion" />

      <div className='m-4 flex border rounded overflow-hidden w-fit'>
        <button
          className={`px-3 py-1 text-sm ${!isMultipleActive ? 'bg-black text-white' : 'bg-white text-black'}`}
          onClick={() => { setMultipleActive(false); setActiveIds([]); }}
        >
          Single
        </button>
        <button
          className={`px-3 py-1 text-sm ${isMultipleActive ? 'bg-black text-white' : 'bg-white text-black'}`}
          onClick={() => { setMultipleActive(true); setActiveIds([]); }}
        >
          Multiple
        </button>
      </div>

      <div className='flex flex-col m-4 gap-4'>
        {questions.map(({ id, title, info }) => {
          const isOpen = activeIds.includes(id);
          return (
            <div key={id} className='border rounded'>
              <div className='flex justify-between items-center p-4'>
                <div>{title}</div>
                <button
                  onClick={() => handleToggle(id)}
                  className='text-xl font-bold w-6 h-6 flex items-center justify-center'
                >
                  {isOpen ? '−' : '+'}
                </button>
              </div>
              {isOpen && (
                <div className='px-4 pb-4 text-gray-600'>
                  {info}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  )
}