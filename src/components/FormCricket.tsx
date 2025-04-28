import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DatabaseIcon, ArrowLeftIcon } from 'lucide-react';

export const FormCricket: React.FC = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState({
	dataTypes:    [] as string[],
	timeRanges:   [] as string[],
	regions:      [] as string[],
	metrics:      [] as string[],
	aggregations: [] as string[]
  });
  const [loadingOptions, setLoadingOptions] = useState(true);

  const [formData, setFormData] = useState({
    seriesName:  '',
    matchDate:   '',
    homeTeam:    '',
    matchFormat: '',
    matchWinner: ''
  });

  const [rows, setRows] = useState<any[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);
  
  useEffect(() => {
	fetch('http://localhost:4000/api/cricket/options')
	  .then(res => res.json())
	  .then(setOptions)
	  .catch(console.error)
	  .finally(() => setLoadingOptions(false));
  }, []);
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQueryError(null);
    setRows([]);
    setLoadingResults(true);
	try {
		const res = await fetch('http://localhost:4000/api/cricket/query', {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify(formData)
		});
		const payload = await res.json();
      if (!res.ok) {
        setQueryError(payload.error || 'Query failed');
      } else if (payload.rows && payload.rows.length > 0) {
        setRows(payload.rows);
      } else {
        setQueryError(payload.message || 'No results found');
      }
    } catch (err) {
      console.error(err);
      setQueryError('Network or server error');
    } finally {
      setLoadingResults(false);
    }
};


  if (loadingOptions) {
	return (
	  <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
		<Spinner animation="border" variant="info" />
	  </div>
	);
  }
  
  return <div className="bg-dark text-light min-vh-100">
      <Container className="py-5">
        <Button variant="outline-info" className="mb-4 d-flex align-items-center" onClick={() => navigate('/')}>
          <ArrowLeftIcon size={18} className="me-2" />
          Back to Dashboard
        </Button>
        <Card className="bg-dark border border-info shadow">
          <Card.Header className="bg-dark text-info border-bottom border-info">
            <h4 className="mb-0 d-flex align-items-center">
              <DatabaseIcon size={24} className="me-2" />
              Fetch Info From DB
            </h4>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Series Name</Form.Label>
                    <Form.Select
                    className="bg-dark text-light border-info"
                    value={formData.seriesName}
                    onChange={e => handleChange('seriesName', e.target.value)}
                  >
                    <option value="">Select Series Name</option>
                    {options.dataTypes.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Match Date</Form.Label>
                    <Form.Select
                    className="bg-dark text-light border-info"
                    value={formData.matchDate}
                    onChange={e => handleChange('matchDate', e.target.value)}
                  >
                    <option value="">Select Match Date</option>
                    {options.timeRanges.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Home Team</Form.Label>
                    <Form.Select
                    className="bg-dark text-light border-info"
                    value={formData.homeTeam}
                    onChange={e => handleChange('homeTeam', e.target.value)}
                  >
                    <option value="">Select Home Team</option>
                    {options.regions.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Match Format</Form.Label>
                    <Form.Select
                    className="bg-dark text-light border-info"
                    value={formData.matchFormat}
                    onChange={e => handleChange('matchFormat', e.target.value)}
                  >
                    <option value="">Select Match Format</option>
                    {options.metrics.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Match Winner</Form.Label>
                    <Form.Select
                    className="bg-dark text-light border-info"
                    value={formData.matchWinner}
                    onChange={e => handleChange('matchWinner', e.target.value)}
                  >
                    <option value="">Select Match Winner</option>
                    {options.aggregations.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center mt-4">
                <Button type="submit" variant="info" className="px-4">
                  Run Query
                </Button>
              </div>
            </Form>

			<hr className="border-info my-4" />

			{loadingResults && (
			  <div className="text-center my-4">
			    <Spinner animation="border" variant="info" />
			  </div>
			)}

			{queryError && (
			  <p className="text-center text-warning mt-3">
    			{queryError}
			  </p>
			)}

			{rows.length > 0 && (
  				<div className="table-responsive mt-3">
    				<Table
    				  striped
    				  bordered
    				  hover
    				  variant="light"
    				  size="sm"
    				  className="text-start"
    				>
    				  <thead className="table-dark">
        				<tr>
        				  {Object.keys(rows[0]).map((col) => (
        				    <th key={col}>{col}</th>
        				  ))}
        				</tr>
    				  </thead>
    				  <tbody>
        				{rows.map((r, i) => (
        				  <tr key={i}>
        				    {Object.keys(r).map((col) => (
        				      <td key={col}>{String(r[col])}</td>
        				    ))}
        				  </tr>
        				))}
    				  </tbody>
    				</Table>
  				</div>
			)}

          </Card.Body>
        </Card>
      </Container>
    </div>;
};