import Button from './components/ui/Button';
import Input from './components/ui/Input';

function App() {
  return (
    <>
    <h2 className='text-4xl text-center font-bold mb-4'>Buttons</h2>
      <div className='flex gap-2'>
        <Button>Button</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
      </div>
      <h2 className='text-4xl text-center font-bold my-4 '>Inputs</h2>
      <Input placeholder='Hola' type='email'/>
    </>
  );
}

export default App;
