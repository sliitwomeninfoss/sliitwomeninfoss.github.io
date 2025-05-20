import React, { Component } from 'react'
import Select from 'react-select'
import BoardMembers from '../utilities/data/board.json'
import NavBar from '../components/common/navBar'
import Footer from '../components/common/footer'

const options = [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
]

const initialState = {
    year: '2025',
    members: [],
}

export default class Team extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        this.changeYear = this.changeYear.bind(this)
    }

    componentDidMount() {
        this.setState({
            members: BoardMembers['2025'] || []
        })
    }

    changeYear = (e) => {
        const year = e.value
        this.setState({
            year,
            members: BoardMembers[year] || []
        })
    }

    render() {
        return (
            <div>
                <NavBar />

                <section id="team">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h3>Board of Executives {this.state.year}</h3>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                onChange={this.changeYear}
                            />
                        </div>

                        <div className="row member-row">
                            {this.state.members.map((member, index) => (
                                <div
                                    className="col-lg-3 col-md-6 team-card"
                                    key={index}
                                    data-aos="zoom-out"
                                    data-aos-delay="100"
                                >
                                    <div className="member">
                                        <img
                                            src={member.IMAGE_SRC}
                                            className="img-fluid team-member-img"
                                            alt={`${member.NAME}`}
                                        />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <div className="social">
                                                    {member.FACEBOOK && (
                                                        <a href={member.FACEBOOK} target="_blank" rel="noopener noreferrer">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    )}
                                                    {member.LINKEDIN && (
                                                        <a href={member.LINKEDIN} target="_blank" rel="noopener noreferrer">
                                                            <i className="fa fa-linkedin"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="member-text">
                                        <h4>{member.NAME}</h4>
                                        <span>{member.ROLE}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <br />
                <Footer />
            </div>
        )
    }
}
