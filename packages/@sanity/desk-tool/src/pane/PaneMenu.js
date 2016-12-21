import React, {PropTypes} from 'react'
import Menu from 'part:@sanity/components/menus/default'

import IconSortAlphaDesc from 'part:@sanity/base/sort-alpha-desc-icon'
import IconList from 'part:@sanity/base/bars-icon'
import IconDetails from 'part:@sanity/base/th-list-icon'
import IconThumbnails from 'part:@sanity/base/th-large-icon'
import IconSettings from 'part:@sanity/base/cog-icon'

class PaneMenu extends React.Component {

  static propTypes = {
    opened: PropTypes.bool,
    onClickOutside: PropTypes.func,
    onAction: PropTypes.func
  }

  render() {

    const menuItems = [
      {
        title: 'Alphabetical',
        icon: IconSortAlphaDesc,
        action: 'setSorting',
        key: 'byAlphabetical',
        sorting: 'name'
      },
      {
        title: 'Last edited',
        icon: undefined,
        action: 'setSorting',
        key: 'byLastEdited',
        sorting: '_updatedAt desc'
      },
      {
        title: 'Created',
        icon: undefined,
        action: 'setSorting',
        key: 'byCreated',
        sort: '_createdAt desc'
      },
      {
        title: 'List',
        icon: IconList,
        action: 'setListView',
        key: 'default',
        divider: true
      },
      {
        title: 'Details',
        icon: IconDetails,
        action: 'setListView',
        key: 'detail'
      },
      {
        title: 'Thumbnails',
        icon: IconThumbnails,
        action: 'setListView',
        key: 'media'

      },
      {
        title: 'Cards',
        icon: IconThumbnails,
        action: 'setListView',
        key: 'card'

      },
      {
        title: 'Settings',
        icon: IconSettings,
        action: 'goTo',
        key: 'settings',
        divider: true
      }
    ]

    const {opened} = this.props

    return (
      <Menu
        onAction={this.props.onAction}
        items={menuItems}
        opened={opened}
        origin="top-right"
        onClickOutside={this.props.onClickOutside}
      />
    )
  }
}

export default PaneMenu
