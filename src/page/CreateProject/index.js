
import { useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { cyberbugsService } from '../../services/cyberBugServices';

const { TextArea } = Input;

function CreateProject() {
      const [projectCategory, setProjectCategory] = useState([]);
      const handleSubmit = async (values) => {
            console.log(values);
            const response = await cyberbugsService.createProject(values);
            if (response) {
                  console.log(response);
            }
      }
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await cyberbugsService.getAllProjectCategory();
                  if (response) {
                        const formattedFarm = response.data.content.map((item) => ({
                              label: item.projectCategoryName,
                              value: item.id,
                        }));
                        setProjectCategory(formattedFarm);
                  }
            }
            fetchApi();
      }, [])
      console.log(projectCategory);
      return (
            <>
                  <div className="container m-5">
                        <h3>Create New Project</h3>
                        <Form className="container" layout='vertical' onFinish={handleSubmit}>
                              <Form.Item label="Project Name" name="projectName">
                                    <Input />
                              </Form.Item>
                              <Form.Item label="Description" name="description">
                                    <TextArea rows={16}/>
                              </Form.Item>
                              <Form.Item name="categoryId">
                                    <Select options={projectCategory} />
                              </Form.Item>
                              <Form.Item>
                                    <Button type='primary' htmlType='submit'>Create project</Button>
                              </Form.Item>

                        </Form>
                  </div>
            </>
      )
}
export default CreateProject;