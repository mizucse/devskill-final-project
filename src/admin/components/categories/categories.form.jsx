import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export default function AddCategory() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('inline');

 

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
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 6,
          },
        }
      : null;


    return (
        <>
            <h1>Add NeCategory</h1>
            <Form {...formItemLayout} layout={formLayout} form={form} initialValues={{ layout: formLayout, }} >
          
        <Form.Item label="Category Name">
            <Input placeholder="Input Category Name" />
        </Form.Item>
        <Form.Item label="Category Description">
            <Input placeholder="Input Category Description" />
        </Form.Item>
        <Form.Item  >
            <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
        </>
    )
}