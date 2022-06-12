import React from 'react';
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>DEEPAK | Resume</title>
        <meta
          name='description'
          content='I m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>DEEPAK</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/deepak-patel-a4a55b237/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='https://github.com/fireclint' target='_blank' rel='noreferrer'>
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p>
            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <p>
          Analytical, innovative, and motivated web development
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
  
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Css
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span> Git
            <span className='px-2'>|</span> Github
            <span className='px-2'>|</span> Ajax
            <span className='px-2'>|</span> Node Js
            <span className='px-2'>|</span> React Router
          </p>
          <p className='py-2'>
            <span className='font-bold'>Database</span>
            <span className='px-2'>|</span>Mongo Db
          </p>
        </div>

        {/* Experience */}
        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-4'>
             Fresher
          </h5>
          {/* <p className='italic'>
            <span className='font-bold'></span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
          </ul> */}
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold'>EDUCATION</span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Institute Of Management Education ( 2018-2021) |
              <ol>BBA</ol>           
            </li>
            <li>
              Children Valley Sr Sec School ( 2017 ) |
              <ol>12th</ol>        
            </li>
            <li>
            Children Valley Sr Sec School ( 2015 ) |
            <ol>10th</ol>            
            </li> 
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              PROJECTS
            </span>
            <span className='px-2'>|</span>Some Basic and simple webs.
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             To Do App using javascript.
            </li>
            <li>
              Netflix Clone using React and firebase.
            </li>
            <li>
              E-commerce website using react.
            </li>
            <li>
              Random Color changer.
            </li>
          </ul>
        </div>
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              INTERESTS
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             Cricket
            </li>
            <li>
              Badminton
            </li>
          </ul>
        </div>
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              LANGUAGES
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             Hindi
            </li>
            <li>
              English
            </li>
          </ul>
        </div>
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              ADDITIONAL INFORMATION
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <h6>
             Name :
            </h6>
            <ol>
              DEEPAK
            </ol>
            <h6>
             Marital Status :
            </h6>
            <ol>
              Single
            </ol>
            <h6>
             Fathers Name :
            </h6>
            <ol>
              Jang Bahadur
            </ol>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
