import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
//import './Featured.css';
const Featured = () => {  
    return (
        <section class="bg-[url('https://i.ibb.co/RjdkRxF/featured.jpg')]  featured-item my-12 pt-10 text-white bg-fixed " >
            <SectionTitle
            heading={' Featured Item'}
            subHeading={'Check it out'}
            >
            </SectionTitle>
           <div className='md:flex justify-center items-center pb-24 px-28 pt-10 bg-opacity-50  bg-slate-400'>
           <div>
              <img src="https://i.ibb.co/RjdkRxF/featured.jpg" alt="" />
            </div>
            <div className='md:ml-16'>
               <p>20 Augest,2023 </p>
               <p className='uppercase'>Where can i get some?</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore accusamus sed fuga! Placeat illum accusamus dignissimos eos aliquid beatae quia quaerat est autem, animi quod at ipsa modi maxime quae! Molestias, nam, minima voluptatibus aspernatur maiores sunt, facilis eligendi non error aliquid soluta reiciendis? Sunt suscipit quidem quod inventore?</p>
               <p><button className="btn btn-outline mt-3 border-0 border-b-4">order now</button>
</p>
            </div>
           </div>
        </section>
    );
};

export default Featured;