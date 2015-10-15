/**
 * Grid
 * ====
 *
 * A full view tile grid  || tile positions contain the different panels
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { panel } from '../../../handler/creators'

import './Grid.styl'


// state prev
@connect(({ panel, router }) => ({
  size: panel.getIn(['size']),
  location: router.location
}), panel)
export default class Grid extends Component {

  render(){
    const { width, height, children, center, size, location } = this.props

    const squares = Math.ceil(Math.sqrt(children.length))
    const base = 100/squares // size

    const expand = children.some((child) => child.props.active) || center && center.props.active

    // TODO:
    // - handle size per tile grid, dont store in panel
    //  -> but on the specific state for each container

    return (
      <div className="Grid" style={{
        width,
        // temporary exception
        // height: location.pathname === '/' ? height : size || height
        height: location.pathname === '/lyrics' ? (size || height) : height
      }}>
        {children.map((child, i) => {
          var perc = base
          var left = (i%squares) * perc
          var top = Math.floor(i/squares) * perc
          var scale = 1
          var opacity = 1
          if (expand) {
            perc = child.props.active ? 100 : 0
            scale = 0
            opacity = 0
            if (child.props.active) {
              left = top = 0
              scale = 1
              opacity = 1
            }
          }
          return (
            <div
              key={i}
              className="Grid__Tile"
              style={{
                position: 'absolute',
                width: `${perc}%`,
                height: `${perc}%`,
                left: `${left}%`,
                top: `${top}%`,
                transform: `scale(${scale})`,
                opacity: `${opacity}`
              }}
            >
              {child}
            </div>
          )
        })}
        {center && (
          <div className="Grid__Center" style={::this.getCenterStyle(expand)}>
            {React.cloneElement(center, { rotate: center.props.active ? 0 : -45 })}
          </div>
        )}
      </div>
    )
  }

  //  return `rotateZ(${deg}deg)`
  getCenterStyle (expand) {
    const { width, height, center } = this.props

    const half = Math.min(width, height)/2
    const centerProps = center.props
    var scale = 1
    var opacity = 1
    var transition = 700
    // short transition only if expand in -> check ie expand
    if (expand && !centerProps.active) {
      scale = 0
      opacity = 0
      transition = 300
    }

    // TODO:
    // - left alignment could be improved to be properly done in the center

    // classNames complete static || -> not active gets a few additional inline styles
    var styles = centerProps.active ?
      {// or check with transform-translate, as positioned in the cnter
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        opacity: 1,
        zIndex: 100,
        transform: 'rotateZ(0)'
        // transition: 'all 300ms ease-in-out' // transform: transition from all: 700ms
      }
      :
      {
        position: 'absolute',
        width: half,
        height: half,
        left: width/2 - half/2,
        top: height/2 - half/2,
        zIndex: 100,
        overflow: 'hidden', // prevent overflowing on rotation
        transform: `rotateZ(45deg) scale(${scale})`,
        opacity: `${opacity}`,
        transition: `all ${transition}ms ease-in-out` // transform
      }
    return styles
  }
}
