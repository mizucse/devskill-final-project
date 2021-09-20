import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { CategoryAddAction } from '../../../store/action/categoryAction'; 
import { useParams } from 'react-router';
 

export default function UpdateCategory() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('inline');
    const dispatch = useDispatch();
    const {id} = useParams();
   
    const [category, setCategory] = useState({
        name: '', 
        description: '', 
    });
    const addCategory = (e,key) => {
      setCategory({...category,[key]: e.target.value})
    }
    const submitAddCategory =() => {
      console.log(category, "=== add Category Data ====");
      dispatch(CategoryAddAction(category)); 
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
            <Input placeholder="Input Category Name" value={category.name} onChange={e=> addCategory(e,'name')} />
        </Form.Item>
        <Form.Item label="Category Description">
            <Input placeholder="Input Category Description"  value={category.description} onChange={e=> addCategory(e,'description')} />
        </Form.Item>
        <Form.Item  >
            <Button onClick={() => submitAddCategory()} type="primary">Submit</Button>
        </Form.Item>
      </Form>
        </>
    )
}