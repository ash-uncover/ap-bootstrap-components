/* COMPONENTS */

// app
import AppRouterBase from './components/app/AppRouter'
export const AppRouter = AppRouterBase

/* CUSTOM */

// Busy
import BusyBubblesBase from './components/custom/busy/BusyBubbles'
export const BusyBubbles = BusyBubblesBase

import BusyCirclesBase from './components/custom/busy/BusyCircles'
export const BusyCircles = BusyCirclesBase

// Code
import CodeJsonBase from './components/custom/code/CodeJson'
export const CodeJson = CodeJsonBase

import CodeXmlBase from './components/custom/code/CodeXml'
export const CodeXml = CodeXmlBase

import CodeXmlCommentBase from './components/custom/code/CodeXmlComment'
export const CodeXmlComment = CodeXmlCommentBase

import CodeXmlGroupBase from './components/custom/code/CodeXmlGroup'
export const CodeXmlGroup = CodeXmlGroupBase

// Rater
import RaterStarBase from './components/custom/rater/RaterStar'
export const RaterStar = RaterStarBase

/* BOOTSTRAP CSS */

// Badges
import BadgeBase from './components/bootstrap/badge/Badge'
export const Badge = BadgeBase

// Buttons
import ButtonBase from './components/bootstrap/button/Button'
export const Button = ButtonBase

import ButtonGroupBase from './components/bootstrap/button/ButtonGroup'
export const ButtonGroup = ButtonGroupBase

// Glyphicons
import GlyphiconBase from './components/bootstrap/glyphicon/Glyphicon'
export const Glyphicon = GlyphiconBase

// Grid
import ColBase from './components/bootstrap/grid/Col'
export const Col = ColBase

import ContainerBase from './components/bootstrap/grid/Container'
export const Container = ContainerBase

import RowBase from './components/bootstrap/grid/Row'
export const Row = RowBase

// Label
import LabelBase from './components/bootstrap/label/Label'
export const Label = LabelBase

// Navbar
import NavbarBase from './components/bootstrap/navbar/Navbar'
export const Navbar = NavbarBase

import NavbarHeaderBase from './components/bootstrap/navbar/NavbarHeader'
export const NavbarHeader = NavbarHeaderBase

import NavbarBrandBase from './components/bootstrap/navbar/NavbarBrand'
export const NavbarBrand = NavbarBrandBase

import NavbarGroupBase from './components/bootstrap/navbar/NavbarGroup'
export const NavbarGroup = NavbarGroupBase

import NavbarLinkBase from './components/bootstrap/navbar/NavbarLink'
export const NavbarLink = NavbarLinkBase

// Panels

import PanelHeaderBase from './components/bootstrap/panel/PanelHeader'
export const PanelHeader = PanelHeaderBase

import PanelTitleBase from './components/bootstrap/panel/PanelTitle'
export const PanelTitle = PanelTitleBase

import PanelBodyBase from './components/bootstrap/panel/PanelBody'
export const PanelBody = PanelBodyBase

import PanelFooterBase from './components/bootstrap/panel/PanelFooter'
export const PanelFooter = PanelFooterBase

import PanelBase from './components/bootstrap/panel/Panel'
export const Panel = Object.assign(PanelBase, {
    Header: PanelHeaderBase
})

// Tables
import TableBase from './components/bootstrap/table/Table'
export const Table = TableBase

import TableBodyBase from './components/bootstrap/table/TableBody'
export const TBody = TableBodyBase

import TableCellBase from './components/bootstrap/table/TableCell'
export const TD = TableCellBase

import TableFootBase from './components/bootstrap/table/TableFoot'
export const TFoot = TableFootBase

import TableHeadBase from './components/bootstrap/table/TableHead'
export const THead = TableHeadBase

import TableHeaderCellBase from './components/bootstrap/table/TableHeaderCell'
export const TH = TableHeaderCellBase

import TableRowBase from './components/bootstrap/table/TableRow'
export const TR = TableRowBase

import TableBuilderBase from './components/bootstrap/table/TableBuilder'
export const TableBuilder = TableBuilderBase

/* SERVICES */

// rest
import RestServiceBase from './services/rest/RestService'
export const RestService = RestServiceBase


/* UTILS */

// rest
import UtilsBase from './utils/Utils'
export const Utils = UtilsBase


/*
import AppMainDefaultBase from './app/AppMainDefault'
export const AppMainDefault = AppMainDefaultBase
import AppFooterBase from './app/AppFooter'
export const AppFooter = AppFooterBase
import AppPreloadBase from './app/AppPreload'
export const AppPreload = AppPreloadBase
// basiclogin
import BasicLoginBase from './basiclogin/BasicLogin'
export const BasicLogin = BasicLoginBase
import BasicRecoverBase from './basiclogin/BasicRecover'
export const BasicRecover = BasicRecoverBase
import BasicRegistrationBase from './basiclogin/BasicRegistration'
export const BasicRegistration = BasicRegistrationBase
// busy
import BusyIndicatorBase from './busy/BusyIndicator'
export const BusyIndicator = BusyIndicatorBase
// button
import ButtonGroupBase from './button/ButtonGroup'
export const ButtonGroup = ButtonGroupBase
import ButtonInputBase from './button/ButtonInput'
export const ButtonInput = ButtonInputBase
// col
import ColBase from './col/Col'
export const Col = ColBase
// form
import FormBase from './form/Form'
export const Form = FormBase
import FormButtonGroupBase from './form/FormButtonGroup'
export const FormButtonGroup = FormButtonGroupBase
import FormCheckboxBase from './form/FormCheckbox'
export const FormCheckbox = FormCheckboxBase
import FormDateBase from './form/FormDate'
export const FormDate = FormDateBase
import FormGoogleAutocompleteBase from './form/FormGoogleAutocomplete'
export const FormGoogleAutocomplete = FormGoogleAutocompleteBase
import FormInputBase from './form/FormInput'
export const FormInput = FormInputBase
import FormTextAreaBase from './form/FormTextArea'
export const FormTextArea= FormTextAreaBase
import FormSelectBase from './form/FormSelect'
export const FormSelect = FormSelectBase
import FormSelectMultiBase from './form/FormSelectMulti'
export const FormSelectMulti = FormSelectMultiBase
import FormTimeBase from './form/FormTime'
export const FormTime = FormTimeBase
import IFormBase from './form/IForm'
export const IForm = IFormBase
// glyphicon
import GlyphiconBase from './glyphicon/Glyphicon'
export const Glyphicon = GlyphiconBase
// image
import AsyncImageBase from './image/AsyncImage'
export const AsyncImage = AsyncImageBase
import ImageBase from './image/Image'
export const Image = ImageBase
import ImageUploaderBase from './image/ImageUploader'
export const ImageUploader = ImageUploaderBase
// itable
import ITableBase from './itable/ITable'
export const ITable = ITableBase
// label
import LabelBase from './label/Label'
export const Label = LabelBase
// layout
import LayoutColumnBase from './layout/LayoutColumn'
export const LayoutColumn = LayoutColumnBase
import LayoutTileBase from './layout/LayoutTile'
export const LayoutTile = LayoutTileBase
// list
import ListGroupBase from './list/ListGroup'
export const ListGroup = ListGroupBase
import ListGroupItemBase from './list/ListGroupItem'
export const ListGroupItem = ListGroupItemBase
import LinkedListGroupItemBase from './list/LinkedListGroupItem'
export const LinkedListGroupItem = LinkedListGroupItemBase
// modal
import ModalBase from './modal/Modal'
export const Modal = ModalBase
// navbar
import APNavbarBase from './navbar/APNavbar'
export const APNavbar = APNavbarBase
import APNavbarGroupBase from './navbar/APNavbarGroup'
export const APNavbarGroup = APNavbarGroupBase
import APNavbarHeaderBase from './navbar/APNavbarHeader'
export const APNavbarHeader = APNavbarHeaderBase
import APNavbarLinkBase from './navbar/APNavbarLink'
export const APNavbarLink = APNavbarLinkBase
import APNavbarTextBase from './navbar/APNavbarText'
export const APNavbarText = APNavbarTextBase
// panel
import PanelBase from './panel/Panel'
export const Panel = PanelBase
// rating
import RaterStarBase from './rating/RaterStar'
export const RaterStar = RaterStarBase
// row
import RowBase from './row/Row'
export const Row = RowBase
// searchbar
import SearchBarBase from './searchbar/SearchBar'
export const SearchBar = SearchBarBase
// table
import TableBase from './table/Table'
export const Table = TableBase
// tile
import TileBase from './tile/Tile'
export const Tile = TileBase
import TileContainerBase from './tile/TileContainer'
export const TileContainer = TileContainerBase
*/