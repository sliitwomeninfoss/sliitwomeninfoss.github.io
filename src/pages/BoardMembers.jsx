import React, { Component } from 'react'
import Select from 'react-select'
// import { BOARD_MEMBER_DETAILS } from '../utilities/constants/BoardMembers.constants';
import BoardMembers from '../utilities/data/board.json'
// import logo from '../assets/img/logos/WIF-Dark.png'
import NavBar from '../components/common/navBar'

const options = [
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
]

const initialState = {
    year: '',
    members: [],
}

export default class Team extends Component {
    constructor(props) {
        super(props)
        this.changeYear = this.changeYear.bind(this)
        this.state = initialState
    }

    componentDidMount = () => {
        this.setState({ year: '2023' })
        this.setState({ members: BoardMembers['2023'] })
    }

    changeYear = (e) => {
        this.setState({ year: e.value })

        setTimeout(
            () => this.setState({ members: BoardMembers[this.state.year] }),
            10
        )
    }

    render() {
        return (
            <div>
                <NavBar />

                <section id="team">
                    <div class="container" data-aos="fade-up">
                        <div class="section-header">
                            <h3>Board of Executives {this.state.year}</h3>
                        </div>
                        <div class="d-flex justify-content-center">
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                onChange={this.changeYear}
                            />
                        </div>

                        <div class="row member-row">
                            {this.state.members.map((member, index) => (
                                <div
                                    class="col-lg-3 col-md-6 team-card"
                                    data-aos="zoom-out"
                                    data-aos-delay="100"
                                >
                                    <div class="member">
                                        <img
                                            src={member.IMAGE_SRC}
                                            class="img-fluid team-member-img"
                                            alt=""
                                        />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <div class="social">
                                                    <a href={member.FACEBOOK}>
                                                        <i class="fa fa-facebook"></i>
                                                    </a>
                                                    <a href={member.LINKEDIN}>
                                                        <i class="fa fa-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="member-text">
                                        <h4>{member.NAME}</h4>
                                        <span>{member.ROLE}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
