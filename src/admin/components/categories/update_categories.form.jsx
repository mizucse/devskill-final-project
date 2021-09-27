import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { CategoryUpdateAction } from '../../../store/action/categoryAction'; 
import { useParams } from 'react-router';
 

export default function UpdateCategory() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('inline');
    const dispatch = useDispatch();
    const {id} = useParams();  
  
    const categoryInfo  = useSelector((store) => store.categorForUpdateStore.categoryDetails);
    
    const [category, setCategory] = useState({
        name: categoryInfo.name, 
        description: categoryInfo.description, 
    });
    const changeCategory = (e,key) => {
      setCategory({...category,[key]: e.target.value})
    }
    const submitUpdateCategory =() => {
      console.log(category, "=== add Category Data ====>>>", id, "=======cat id====" );
      dispatch(CategoryUpdateAction(category, id)); 
    }

    

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 6,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
 


    return (
        <>
            <h1>Update Category</h1>
            <Form {...formItemLayout} layout={formLayout} form={form} initialValues={{ layout: formLayout, }} >
          
        <Form.Item label="Category Name">
            <Input placeholder="Input Category Name" defaultValue={category.name} onChange={e=> changeCategory(e,'name')} />
        </Form.Item>
        <Form.Item label="Category Description">
            <Input placeholder="Input Category Description"  defaultValue={category.description} onChange={e=> changeCategory(e,'description')} />
        </Form.Item>
        <Form.Item  >
            <Button onClick={() => submitUpdateCategory()} type="primary">Submit</Button>
        </Form.Item>
      </Form>
        </>
    )
}