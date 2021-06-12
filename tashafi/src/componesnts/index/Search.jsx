import React , {useEffect  , useState} from 'react'
import {InputGroup ,Dropdown ,DropdownButton ,FormControl , Button , Form , Alert ,Toast} from 'react-bootstrap';
import Typical from 'react-typical'
import axios from 'axios'

export default function Search() {
  const [speciality , setSpeciality] = useState([''])
  const [search , setSearch] = useState("")
  const [selected , setSelected] = useState({name:"speciality" , id:null})
  const [alert , setAlert] = useState('')
  const [show, setShow] = useState(false);


  



  useEffect(()=>{
    axios.get("http://localhost:4001/api/v1/specialty/specialties")
    .then(data => {      
      let array=[{name:'All Speciality',_id:'0'}]
      data.data.allSpecialties.forEach(element => {
        array.push(element)
      });
      console.log(array)
      setSpeciality(array)
    })
    .catch(error => console.error(error))
    } , [])

    // 
    const changeSearchHandler = ({target : {name , value}}) => {
      setSearch({[name] : value})
      // setSearch({...search , [name] : value})

      console.log(search)
    }

    const onClick = (e)=>{
      const x = e.split(" ")
      setSelected({
        name:x[0],
        id:x[1]
      })
      console.log(e)
    }


    const onSubmit=(e)=>{
      e.preventDefault()
      
    if(selected.id == null){
      setAlert(
        
        <Alert 
        variant="danger"
        >
          you must chose one of the specility that's available
      </Alert>
      
      )
      setShow(true)
      
        }
    else if(selected.id=='0' || search==''){
      axios.get('http://localhost:4001/api/v1/booking/finddoctors')
      console.log("enter the second condition")
      .then(data=>{
        console.log("entered then")
        console.log(data)
      })
      .catch((err) =>{
         console.log(err.msg)
         console.log("enter catch")
      
      })
    
    }      
    }


    




  const specialties = speciality.map((item)=>{
    return  <Dropdown.Item href="#" eventKey={`${item.name} ${item._id}`} > {item.name} </Dropdown.Item>
  })


  

    return (
      
        <>
        
        <h2> Find local{' '} 
         <Typical
          loop={Infinity} 
          wrapper="span" 
          steps={['doctor',3000 ,'dentist',2000] }  /> 
                  <br />
                You can trust
        </h2>
    <Form
    onSubmit={(e)=>onSubmit(e)}
    >
<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide >
{alert}
</Toast>
    <InputGroup className="mb-3  search" size="lg"   > 
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={selected.name}
      id="input-group-dropdown-1"
      onSelect = {(e)=>onClick(e)}
      name="speciality"

      
    >
      
      {specialties}
    </DropdownButton>
    <FormControl className="form-control "
      placeholder=" City"
      aria-label="City"
      aria-describedby="basic-addon2"
      name="city"
      onChange = {(e)=>changeSearchHandler(e)}
    />
    <InputGroup.Prepend>
      <Button variant="outline-secondary" type="submit">Search </Button>
    </InputGroup.Prepend>
  </InputGroup>
      </Form>

        </>
    )
}
// 