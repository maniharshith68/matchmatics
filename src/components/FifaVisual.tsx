import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LineChart } from './charts/LineChart';
import { BarChart } from './charts/BarChart';
import { PieChart } from './charts/PieChart';
import { StatCard } from './charts/StatCard';
import { fetchMockData } from '../services/mockData';
import { BarChartIcon, LineChartIcon, PieChartIcon, LayoutDashboardIcon, DatabaseIcon } from 'lucide-react';
export const FifaVisual: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const mockData = await fetchMockData();
        setData(mockData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>;
  }
  return <div className="dashboard-container bg-dark text-light min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-info">
            <Container fluid>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <LayoutDashboardIcon size={24} className="me-2 text-info" />
                    <span className="fw-bold text-info">Matchmatics Dashboard - FIFA</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid className="py-4">
        <Row className="mb-4">
            <Col md={3}>
              <StatCard title="GoalKeeper with most appearances" value={'Peter Shilton; Years: 1990, 1986, 1982'} change={data.userStats.change} icon="goal" />
            </Col>
            <Col md={3}>
              <StatCard title="Team with most Cups" value={'Brazil, 5'} change={data.revenue.change} icon="cups" />
            </Col>
            <Col md={3}>
              <StatCard title="Team with most Finals" value={'Germany, 9'} change={data.conversionRate.change} icon="finals" />
            </Col>
            <Col md={3}>
              <StatCard title="Team with most home wins in final" value={"Uruguay, Years: 1930,1950"} change={data.activeSessions.change} icon="home" />
            </Col>
        </Row>
        <Row className="mb-4">
            <Col lg={8}>
            <Card className="bg-dark border border-info shadow h-100">
              <Card.Header className="d-flex justify-content-between align-items-center bg-dark text-info border-bottom border-info">
                <h5 className="mb-0">Cristiano Ronaldo vs Lionel Messi  </h5>
                <LineChartIcon size={20} />
              </Card.Header>
              <Card.Body>
                <LineChart data={data.fifacompare} />
              </Card.Body>
            </Card>
            </Col>
            <Col lg={4}>
            <Card className="bg-dark border border-info shadow h-100">
              <Card.Header className="d-flex justify-content-between align-items-center bg-dark text-info border-bottom border-info">
                <h5 className="mb-0">Team with Most Cups </h5>
                <PieChartIcon size={20} />
              </Card.Header>
              <Card.Body>
                <PieChart data={data.mostcups} />
              </Card.Body>
            </Card>
            </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-dark border border-info shadow">
              <Card.Header className="d-flex justify-content-between align-items-center bg-dark text-info border-bottom border-info">
                <h5 className="mb-0">Team With Most Wins</h5>
                <BarChartIcon size={20} />
              </Card.Header>
              <Card.Body>
                <BarChart data={data.mostwins} showLegend={false}  />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="outline-info" className="d-flex align-items-center mx-auto" onClick={() => navigate('/form/fifa')}>
              <DatabaseIcon size={18} className="me-2" />
              Fetch using query
            </Button>
          </Col>
        </Row>
        </Container>
    </div>;
};