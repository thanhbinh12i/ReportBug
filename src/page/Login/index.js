import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, TwitterOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../redux/actions/login';
import { cyberbugsService } from '../../services/cyberBugServices';
import { TOKEN, USER_LOGIN } from '../../utils/settingSystem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
      const dispatch = useDispatch();
      
      const handleSubmit = async (values) => {
            const userLogin = {
                  email: values.email,
                  password: values.password
            }
            setLoading(true);
            console.log(userLogin);
            try {
                  const response = await cyberbugsService.signIn(userLogin);
                  if (response) {
                        localStorage.setItem(TOKEN, response.data.content.accessToken);
                        localStorage.setItem(USER_LOGIN, JSON.stringify(response.data.content));
                        dispatch(checkLogin(true));
                        navigate("/");
                  }
            } catch (error) {
                  console.error('Login failed:', error);
            } finally {
                  setLoading(false);
            }
      }
      return (
            <>
                  <Form onFinish={handleSubmit} className="container" style={{ height: window.innerHeight }} >
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: window.innerHeight }} >
                              <h3 className="text-center" style={{ fontWeight: 300, fontSize: 35 }}>Login</h3>
                              <Form.Item className="d-flex mt-3" name="email">
                                    <Input style={{ width: '100%', minWidth: 300 }} size="large" placeholder="email" prefix={<UserOutlined />} />
                              </Form.Item>
                              <Form.Item className="d-flex" name="password">
                                    <Input style={{ width: '100%', minWidth: 300 }} type="password" size="large" placeholder="password" prefix={<LockOutlined />} />
                              </Form.Item>

                              <Button htmlType="submit" loading={loading} size="large" style={{ minWidth: 300, backgroundColor: 'rgb(102,117,223)', color: '#fff' }}>Login</Button>

                              <div className="social mt-3 d-flex">
                                    <Button style={{ backgroundColor: 'rgb(59,89,152)' }} shape="circle" size={"large"}>
                                          <span className="font-weight-bold" style={{ color: '#fff' }} >F</span>
                                    </Button>
                                    <Button type="primary ml-3" shape="circle" icon={<TwitterOutlined />} size={"large"}>

                                    </Button>
                              </div>
                        </div>

                  </Form>
            </>
      )
}

export default Login;