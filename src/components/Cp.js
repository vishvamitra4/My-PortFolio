import React from "react";
import { ReactDOM } from "react-dom/client";
import "./css_file/cp.css";

function Cp() {
    return (
        <div className="flex-box-container">
            <h3>Competitive Programming</h3>
                <table>

                    <tr>
                        <th>Sr. No.</th>
                        <th>Platform</th>
                        <th>UserName</th>
                        <th>Ques. Practice</th>
                        <th>Rating</th>
                    </tr>

                    <tr>
                        <td>1.</td>
                        <td>Leetcode</td>
                        <td><a href="https://leetcode.com/vishvamitra73/" target="_blank">vishvamitra73</a></td>
                        <td>264</td>
                        <td>1500</td>
                    </tr>

                    <tr>
                        <td>2.</td>
                        <td>GeeksForGeeks</td>
                        <td><a href="https://auth.geeksforgeeks.org/user/vishvamitrakumarsingh/practice" target="_blank">@vishvamitra</a></td>
                        <td>205</td>
                        <td>479score</td>
                    </tr>

                    <tr>
                        <td>3.</td>
                        <td>CodeForces</td>
                        <td><a href="https://codeforces.com/profile/vishvamitra4" target="_blank">vishvamitra4</a></td>
                        <td>80</td>
                        <td>1071</td>
                    </tr>

                    <tr>
                        <td>4.</td>
                        <td>CodeChef</td>
                        <td><a href="https://www.codechef.com/users/vishvamitra4" target="_blank">vishvamitra4</a></td>
                        <td>50</td>
                        <td>1667</td>
                    </tr>

                    <tr>
                        <td>5.</td>
                        <td>HackerRank</td>
                        <td><a href="https://www.hackerrank.com/vishvamitrakuma1" target="_blank">vishvamitra</a></td>
                        <td>150+</td>
                        <td>6⭐</td>
                    </tr>

                </table>
            
        </div>
    );
};


export default Cp;