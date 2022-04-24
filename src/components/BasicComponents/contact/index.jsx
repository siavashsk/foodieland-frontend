import Input from './ContactInput/Input';
import Select from './ContactInput/Select';
import TextArea from './ContactInput/TextArea';


const options = [
    {id: "Advertising",
    name: "Advertising"},
    {id: "Commercials",
    name: "Commercial"},
    {id: "Support",
    name: "Support"},
]

const Contact = (props) => {
    return ( 
        <>
        <div className='flex justify-center lg:grid lg:grid-cols-3 w-full my-20' >
            <h2 className="text-6xl font-semibold tracking-tight col-start-2" >Contact us</h2>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 mb-44" >
        <img src="http://localhost:3000/images/cooker/Cook-contact.png" alt="Cook" className='mb-16 justify-self-center self-center lg:h-5/6 ml-3'/>
            <form className=' flex flex-col px-10 sm:px-32 lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-x-10 lg:col-span-2 lg:px-5  '>
                <Input id="name" label="NAME" type="text" placeholder="Enter your name..." />
                <Input id="email" label="EMAIL ADDRESS" type="text" placeholder="Enter your email..." />
                <Input id="subject" label="SUBJECT" type="text" placeholder="Enter subject..." />
                <Select id="type" label="ENQUIRY TYPE" options={options} />
                <TextArea id="message" label="MESSAGES" placeholder="Enter your Messages..." />
                <button className="flex justify-center items-center w-36 md:w-[180px] h-12 md:h-[60px] bg-black text-white rounded-2xl font-semibold " >Submit</button>
            </form>
        </div>
        </>
     );
}
 
export default Contact;