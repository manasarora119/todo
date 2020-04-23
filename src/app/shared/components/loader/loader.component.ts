import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Input
} from "@angular/core";
import { LoaderService } from "@app/core/services";
import { Subscription } from "rxjs";

@Component({
  selector: "loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() ref = "root";

  private state: Subscription;
  public showLoader: Boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.checkState();
  }

  checkState() {
    this.state = this.loaderService
      .getLoadState(this.ref)
      .subscribe((res: any) => {
        setTimeout(() => (this.showLoader = res));
      });
  }

  ngOnDestroy() {
    this.state.unsubscribe();
  }
}
