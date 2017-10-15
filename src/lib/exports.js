/* COMPONENTS */

// Data
import BaseDataBase from './components/BaseData'
export const BaseData = BaseDataBase

// Component
import BaseComponentBase from './components/Base'
export const BaseComponent = BaseComponentBase

// app
import AppRouterBase from './components/app/AppRouter'
export const AppRouter = AppRouterBase

// auth
import BasicLoginBase from './components/complex/auth/BasicLogin'
export const BasicLogin = BasicLoginBase

import BasicRegistrationBase from './components/complex/auth/BasicRegistration'
export const BasicRegistration = BasicRegistrationBase

/* CUSTOM */

// Busy
import BusyBarsBase from './components/custom/busy/BusyBars'
export const BusyBars = BusyBarsBase

import BusyBubblesBase from './components/custom/busy/BusyBubbles'
export const BusyBubbles = BusyBubblesBase

import BusyCirclesBase from './components/custom/busy/BusyCircles'
export const BusyCircles = BusyCirclesBase

// Calendar

import CalendarBase from './components/custom/calendar/Calendar'
export const Calendar = CalendarBase

// Code
import CodeJsonBase from './components/custom/code/CodeJson'
export const CodeJson = CodeJsonBase

import CodeXmlBase from './components/custom/code/CodeXml'
export const CodeXml = CodeXmlBase

import CodeXmlCommentBase from './components/custom/code/CodeXmlComment'
export const CodeXmlComment = CodeXmlCommentBase

import CodeXmlGroupBase from './components/custom/code/CodeXmlGroup'
export const CodeXmlGroup = CodeXmlGroupBase

// Google
import GoogleAutocompleteBase from './components/custom/googlemap/GoogleAutocomplete'
export const GoogleAutocomplete = GoogleAutocompleteBase

import GoogleMapBase from './components/custom/googlemap/GoogleMap'
export const GoogleMap = GoogleMapBase

export const Google = {
    Autocomplete: GoogleAutocompleteBase,
    Map: GoogleMapBase
}

// Modal
import ModalBase from './components/custom/modal/Modal'
export const Modal = ModalBase

// Objinfo
import ObjInfoBase from './components/custom/objinfo/ObjInfo'
export const ObjInfo = ObjInfoBase

// Rater
import RaterStarBase from './components/custom/rater/RaterStar'
export const RaterStar = RaterStarBase

// Store table
import StoreTableBase from './components/custom/storetable/StoreTable'
export const StoreTable = StoreTableBase



/* DATA */

// Nationalities
import NationalityBase from './data/geo/Nationality'
export const Nationality = NationalityBase

// Days
import DayBase from './data/time/Day'
export const Day = DayBase


/* BOOTSTRAP CSS */

// Badges
import BadgeBase from './components/bootstrap/badge/Badge'
export const Badge = BadgeBase


// Buttons
import ButtonBase from './components/bootstrap/button/Button'
export const Button = ButtonBase

import ButtonGroupBase from './components/bootstrap/button/ButtonGroup'
export const ButtonGroup = ButtonGroupBase


// Carousels
import CarouselBase from './components/bootstrap/carousel/Carousel'
export const Carousel = CarouselBase


// Form
import FormBooleanBase from './components/bootstrap/form/FormBoolean'
export const FormBoolean = FormBooleanBase

import FormCheckboxBase from './components/bootstrap/form/FormCheckbox'
export const FormCheckbox = FormCheckboxBase

import FormDateBase from './components/bootstrap/form/FormDate'
export const FormDate = FormDateBase

import FormGroupBase from './components/bootstrap/form/FormGroup'
export const FormGroup = FormGroupBase

import FormInputBase from './components/bootstrap/form/FormInput'
export const FormInput = FormInputBase

import FormLabelBase from './components/bootstrap/form/FormLabel'
export const FormLabel = FormLabelBase

import FormRadioBase from './components/bootstrap/form/FormRadio'
export const FormRadio = FormRadioBase

import FormSelectBase from './components/bootstrap/form/FormSelect'
export const FormSelect = FormSelectBase

import FormSelectMultiBase from './components/bootstrap/form/FormSelectMulti'
export const FormSelectMulti = FormSelectMultiBase

import FormStaticBase from './components/bootstrap/form/FormStatic'
export const FormStatic = FormStaticBase

import FormSubmitBase from './components/bootstrap/form/FormSubmit'
export const FormSubmit = FormSubmitBase

import FormSwitchBase from './components/bootstrap/form/FormSwitch'
export const FormSwitch = FormSwitchBase

import FormTextAreaBase from './components/bootstrap/form/FormTextArea'
export const FormTextArea = FormTextAreaBase

import FormTimeBase from './components/bootstrap/form/FormTime'
export const FormTime = FormTimeBase

import FormBase from './components/bootstrap/form/Form'
FormBase.Boolean = FormBooleanBase
FormBase.Checkbox = FormCheckboxBase
FormBase.Date = FormDateBase
FormBase.Group = FormGroupBase
FormBase.Input = FormInputBase
FormBase.Label = FormLabelBase
FormBase.Radio = FormRadioBase
FormBase.Select = FormSelectBase
FormBase.SelectMulti = FormSelectMultiBase
FormBase.Static = FormStaticBase
FormBase.Submit = FormSubmit
FormBase.Switch = FormSwitchBase
FormBase.TextArea = FormTextArea
FormBase.Time = FormTimeBase
export const Form = FormBase

import FormGroupBuilderBase from './components/bootstrap/form/FormGroupBuilder'
export const FormGroupBuilder = FormGroupBuilderBase

import FormGroupBuilderBase2 from './components/bootstrap/form/FormGroupBuilder2'
export const FormGroupBuilder2 = FormGroupBuilderBase2

import FormGroupsBuilderBase from './components/bootstrap/form/FormGroupsBuilder'
export const FormGroupsBuilder = FormGroupsBuilderBase

// Filter
import FilterBase from './components/bootstrap/filter/Filter'
export const Filter = FilterBase


// Glyphicons
import GlyphiconBase from './components/bootstrap/glyphicon/Glyphicon'
export const Glyphicon = GlyphiconBase


// Grid
import ColBase from './components/bootstrap/grid/Col'
export const Col = ColBase

import ClearfixBase from './components/bootstrap/grid/Clearfix'
export const Clearfix = ClearfixBase

import ContainerBase from './components/bootstrap/grid/Container'
export const Container = ContainerBase

import RowBase from './components/bootstrap/grid/Row'
export const Row = RowBase

export const Grid = {
    Clearfix: ClearfixBase,
    Container: ContainerBase,
    Row: RowBase,
    Col: ColBase
}

// Image
import ImageBase from './components/bootstrap/image/Image'
export const Image = ImageBase

// Label
import LabelBase from './components/bootstrap/label/Label'
export const Label = LabelBase

// List
import ListGroupBase from './components/bootstrap/list/ListGroup'
export const ListGroup = ListGroupBase
import ListGroupItemBase from './components/bootstrap/list/ListGroupItem'
export const ListGroupItem = ListGroupItemBase

import ListGroupLinkBase from './components/bootstrap/list/ListGroupLink'
export const ListGroupLink = ListGroupLinkBase
import ListGroupLinkItemBase from './components/bootstrap/list/ListGroupLinkItem'
export const ListGroupLinkItem = ListGroupLinkItemBase

import ListGroupButtonBase from './components/bootstrap/list/ListGroupButton'
export const ListGroupButton = ListGroupButtonBase
import ListGroupButtonItemBase from './components/bootstrap/list/ListGroupButtonItem'
export const ListGroupButtonItem = ListGroupButtonItemBase

import ListGroupItemHeadingBase from './components/bootstrap/list/ListGroupItemHeading'
export const ListGroupItemHeading = ListGroupItemHeadingBase

import ListGroupItemTextBase from './components/bootstrap/list/ListGroupItemText'
export const ListGroupItemText = ListGroupItemTextBase

export const List = {
    Group: ListGroupBase,
    Item: ListGroupItemBase,
    GroupLink: ListGroupLinkBase,
    ItemLink: ListGroupLinkItemBase,
    GroupButton: ListGroupButtonBase,
    ItemButton: ListGroupButtonItemBase,
    ItemHeading: ListGroupItemHeadingBase,
    ItemText: ListGroupItemTextBase
}

import SearchBarBase from './components/bootstrap/searchbar/SearchBar'
export const SearchBar = SearchBarBase

// Navbar
import NavbarHeaderBase from './components/bootstrap/navbar/NavbarHeader'
export const NavbarHeader = NavbarHeaderBase

import NavbarBrandBase from './components/bootstrap/navbar/NavbarBrand'
export const NavbarBrand = NavbarBrandBase

import NavbarGroupBase from './components/bootstrap/navbar/NavbarGroup'
export const NavbarGroup = NavbarGroupBase

import NavbarLinkBase from './components/bootstrap/navbar/NavbarLink'
export const NavbarLink = NavbarLinkBase

import NavbarTextBase from './components/bootstrap/navbar/NavbarText'
export const NavbarText = NavbarTextBase

import NavbarBase from './components/bootstrap/navbar/Navbar'
NavbarBase.Header = NavbarHeaderBase
NavbarBase.Brand = NavbarBrandBase
NavbarBase.Group = NavbarGroupBase
NavbarBase.Link = NavbarLinkBase
NavbarBase.Text = NavbarTextBase
export const Navbar = NavbarBase

import NavbarMobileBase from './components/bootstrap/navbar/NavbarMobile'
export const NavbarMobile = NavbarMobileBase

import SidebarBase from './components/bootstrap/navbar/Sidebar'
export const Sidebar = SidebarBase


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
PanelBase.Header = PanelHeaderBase
PanelBase.Title = PanelTitleBase
PanelBase.Body = PanelBodyBase
PanelBase.Footer = PanelFooterBase
export const Panel = PanelBase

// Tables
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

import TableBase from './components/bootstrap/table/Table'
TableBase.Head = TableHeadBase
TableBase.Body = TableBodyBase
TableBase.Foot = TableFootBase
TableBase.TR = TableRowBase
TableBase.TH = TableHeaderCellBase
TableBase.TD = TableCellBase
export const Table = TableBase


/* SERVICES */

// rest
import RestServiceBase from './services/rest/RestService'
export const RestService = RestServiceBase


// google map
import GoogleMapServiceBase from './services/google/GoogleMapService'
export const GoogleMapService = GoogleMapServiceBase


/* UTILS */

// date
import MomentHelperBase from './utils/date/MomentHelper'
export const MomentHelper = MomentHelperBase

// text
import TextUtilsBase from './utils/TextUtils'
export const TextUtils = TextUtilsBase

// javascript
import APFilesBase from './utils/javascript/APFiles'
export const APFiles = APFilesBase
import ArraySetBase from './utils/javascript/ArraySet'
export const ArraySet = ArraySetBase
import MimeTypesBase from './utils/javascript/MimeTypes'
export const MimeTypes = MimeTypesBase
import UtilsBase from './utils/Utils'
export const Utils = UtilsBase

// formatters
import FormattersBase from './utils/formatters/Formatters'
export const Formatters = FormattersBase

// validators
import ValidatorsBase from './utils/validators/Validators'
export const Validators = ValidatorsBase
