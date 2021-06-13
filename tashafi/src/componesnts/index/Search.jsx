import React , {useEffect  , useState} from 'react'
import {InputGroup ,Dropdown ,DropdownButton ,FormControl , Button , Form , Alert ,Toast} from 'react-bootstrap';
import axios from 'axios'
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom";

export default function Search() {
  const [speciality , setSpeciality] = useState([''])
  const [search , setSearch] = useState("")
  const [selected , setSelected] = useState({name:"speciality" , id:null})
  const [alert , setAlert] = useState('')
  const [show, setShow] = useState(false);
  const [result , setResult] = useState([''])

  const history = useHistory();



  



  useEffect(()=>{
    axios.get("http://localhost:4000/api/v1/specialty/specialties")
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
      history.push(`/result/${selected.id}/${search.city}`)

// 1 - if select._id == null then create alert box
    if(selected.id == null || search.city==undefined){
      setAlert(
        
        <Alert 
        variant="danger"
        >
          messingData
      </Alert>
      
      )
      setShow(true)
      
        }


    }


    



    




  const specialties = speciality.map((item)=>{
    return  <Dropdown.Item href="#" eventKey={`${item.name} ${item._id}`} > {item.name} </Dropdown.Item>
  })


  

    return (
      
        <>
        
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